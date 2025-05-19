import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function OPTIONS() {
    return new NextResponse(null, {
        status: 204,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
}

export async function POST(request: Request) {
    try {
        console.log('API route called with method:', request.method);

        let email;
        try {
            const body = await request.json();
            email = body.email;
            console.log('Request body parsed successfully:', body);
        } catch (parseError) {
            console.error('Error parsing request body:', parseError);
            return NextResponse.json({ error: 'Invalid request body' }, {
                status: 400,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                }
            });
        }

        if (!email) {
            console.error('Email is required but was not provided');
            return NextResponse.json({ error: 'Email is required' }, {
                status: 400,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                }
            });
        }

        console.log('Environment check:');
        console.log('- GOOGLE_SERVICE_ACCOUNT_EMAIL present:', !!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL);
        console.log('- GOOGLE_PRIVATE_KEY present:', !!process.env.GOOGLE_PRIVATE_KEY);
        console.log('- GOOGLE_SHEET_ID present:', !!process.env.GOOGLE_SHEET_ID);

        const SCOPES = [
            'https://www.googleapis.com/auth/spreadsheets',
        ];

        const privateKey = process.env.GOOGLE_PRIVATE_KEY
            ? process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n')
            : '';

        if (!privateKey) {
            console.error('Private key is missing or empty');
            return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
        }

        try {
            const jwt = new JWT({
                email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || '',
                key: privateKey,
                scopes: SCOPES,
            });

            console.log("Service account:", process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL);
            console.log("Sheet ID:", process.env.GOOGLE_SHEET_ID);

            if (!process.env.GOOGLE_SHEET_ID) {
                console.error('Sheet ID is missing');
                return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
            }

            const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, jwt);
            console.log("Created GoogleSpreadsheet instance");

            console.log("Loading document info...");
            await doc.loadInfo();
            console.log("Document loaded successfully:", doc.title);

            if (doc.sheetsByIndex.length === 0) {
                console.error('No sheets found in the document');
                return NextResponse.json({ error: 'Sheet configuration error' }, { status: 500 });
            }

            const sheet = doc.sheetsByIndex[0];
            console.log(`Using sheet: "${sheet.title}" (${sheet.sheetId})`);

            await sheet.loadCells('A1:B1');
            console.log("Cells loaded successfully");

            const a1 = sheet.getCell(0, 0);
            const b1 = sheet.getCell(0, 1);

            if (!a1.value || !b1.value) {
                console.log("Setting up headers...");
                a1.value = 'Email';
                b1.value = 'Timestamp';
                await sheet.saveUpdatedCells();
                console.log("Headers saved successfully");
            } else {
                console.log(`Headers already exist: ${a1.value}, ${b1.value}`);
            }

            const timestamp = new Date().toISOString();
            console.log(`Adding row with: email=${email}, timestamp=${timestamp}`);

            const row: Record<string, string> = {};
            row[String(a1.value)] = email;
            row[String(b1.value)] = timestamp;

            const appendResult = await sheet.addRow(row);

            console.log("Row added successfully");

            await new Promise(resolve => setTimeout(resolve, 1000));

            console.log("Reading rows to verify data was added...");
            const rows = await sheet.getRows();
            console.log(`Sheet now has ${rows.length} rows (including header)`);

            const foundRows = rows.filter(row => {
                const rowEmail = row.get('email');
                return rowEmail === email;
            });

            if (foundRows.length > 0) {
                console.log("Found our data in the sheet:", foundRows.length, "matches");
                console.log("Data confirmed to be saved to sheet");
            } else {
                console.warn("Could not find our data in the sheet. This might be a caching issue.");
            }

            return NextResponse.json({
                success: true,
                message: "Email added to waitlist successfully",
                rowCount: rows.length
            }, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                }
            });
        } catch (googleError) {
            console.error('Google Sheets API error:', googleError);
            console.error('Error details:', googleError instanceof Error ? googleError.message : 'Unknown error');
            console.error('Error stack:', googleError instanceof Error ? googleError.stack : 'No stack available');

            throw googleError;
        }
    } catch (error) {
        console.error('Error adding email to spreadsheet:', error);
        console.error('Error details:', error instanceof Error ? error.message : 'Unknown error');

        let errorMessage = 'Failed to add email to waitlist';
        const statusCode = 500;

        if (error instanceof Error) {
            if (error.message.includes('jwt') || error.message.includes('auth')) {
                errorMessage = 'Authentication error with Google Sheets';
            } else if (error.message.includes('permission')) {
                errorMessage = 'Permission denied accessing the spreadsheet';
            } else if (error.message.includes('not found')) {
                errorMessage = 'Spreadsheet not found';
            }
        }

        return NextResponse.json(
            { error: errorMessage },
            {
                status: statusCode,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                }
            }
        );
    }
} 