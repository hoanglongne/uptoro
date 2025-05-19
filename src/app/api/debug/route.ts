import { NextResponse } from 'next/server';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET() {
    try {
        // Check environment variables
        const envCheck = {
            GOOGLE_SERVICE_ACCOUNT_EMAIL: {
                present: !!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
                value: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
                    ? `${process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL.substring(0, 5)}...`
                    : null
            },
            GOOGLE_PRIVATE_KEY: {
                present: !!process.env.GOOGLE_PRIVATE_KEY,
                length: process.env.GOOGLE_PRIVATE_KEY?.length || 0,
                startsCorrectly: process.env.GOOGLE_PRIVATE_KEY?.startsWith('-----BEGIN PRIVATE KEY-----')
            },
            GOOGLE_SHEET_ID: {
                present: !!process.env.GOOGLE_SHEET_ID,
                value: process.env.GOOGLE_SHEET_ID || null
            }
        };

        let sheetConnection = "Not attempted yet";
        let sheetInfo = null;

        // Only attempt connection if we have the required variables
        if (envCheck.GOOGLE_SERVICE_ACCOUNT_EMAIL.present &&
            envCheck.GOOGLE_PRIVATE_KEY.present &&
            envCheck.GOOGLE_SHEET_ID.present) {

            try {
                // Try to format the key properly
                const privateKey = process.env.GOOGLE_PRIVATE_KEY
                    ? process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n')
                    : '';

                // Initialize auth
                const jwt = new JWT({
                    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || '',
                    key: privateKey,
                    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
                });

                // Create spreadsheet instance
                const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID || '', jwt);

                // Try to load document info
                sheetConnection = "Attempting connection...";
                await doc.loadInfo();

                // If we get here, connection was successful
                sheetConnection = "Connected successfully";
                sheetInfo = {
                    title: doc.title,
                    sheetCount: doc.sheetCount,
                    firstSheetTitle: doc.sheetsByIndex[0]?.title || "No sheets found",
                };
            } catch (err) {
                sheetConnection = "Connection failed";
                sheetInfo = {
                    error: err instanceof Error ? err.message : String(err)
                };
            }
        }

        // Return diagnostics
        return NextResponse.json({
            environment: process.env.NODE_ENV,
            timestamp: new Date().toISOString(),
            envVariables: envCheck,
            sheetConnection,
            sheetInfo,
        });
    } catch (error) {
        return NextResponse.json({
            error: "Debug endpoint error",
            message: error instanceof Error ? error.message : String(error),
            timestamp: new Date().toISOString()
        }, { status: 500 });
    }
} 