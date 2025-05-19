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
        const { email } = await request.json();

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, {
                status: 400,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                }
            });
        }

        const SCOPES = [
            'https://www.googleapis.com/auth/spreadsheets',
        ];

        const privateKey = process.env.GOOGLE_PRIVATE_KEY
            ? process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n')
            : '';

        const jwt = new JWT({
            email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || '',
            key: privateKey,
            scopes: SCOPES,
        });

        console.log("Using service account:", process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL);
        console.log("Sheet ID:", process.env.GOOGLE_SHEET_ID);

        const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID || '', jwt);

        await doc.loadInfo();

        const sheet = doc.sheetsByIndex[0];

        try {
            const rows = await sheet.getRows();
            if (rows.length === 0) {
                console.log("Adding headers to empty sheet...");
                await sheet.setHeaderRow(['email', 'timestamp']);
            }
        } catch (error) {
            console.log("No headers found, setting up headers...");
            await sheet.setHeaderRow(['email', 'timestamp']);
        }

        await sheet.addRow({
            email,
            timestamp: new Date().toISOString(),
        });

        return NextResponse.json({ success: true }, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
            }
        });
    } catch (error) {
        console.error('Error adding email to spreadsheet:', error);
        console.error('Error details:', error instanceof Error ? error.message : 'Unknown error');

        return NextResponse.json(
            { error: 'Failed to add email to waitlist' },
            {
                status: 500,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                }
            }
        );
    }
} 