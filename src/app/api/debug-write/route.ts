import { NextResponse } from 'next/server';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET() {
    try {
        const results = {
            steps: [] as string[],
            errors: [] as string[],
            success: false
        };

        results.steps.push("Starting debug write test");

        // Check environment variables
        if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL) {
            results.errors.push("Missing GOOGLE_SERVICE_ACCOUNT_EMAIL");
        }
        if (!process.env.GOOGLE_PRIVATE_KEY) {
            results.errors.push("Missing GOOGLE_PRIVATE_KEY");
        }
        if (!process.env.GOOGLE_SHEET_ID) {
            results.errors.push("Missing GOOGLE_SHEET_ID");
        }

        // If any variables are missing, return early
        if (results.errors.length > 0) {
            return NextResponse.json(results);
        }

        // Format private key
        results.steps.push("Formatting private key");
        const privateKey = process.env.GOOGLE_PRIVATE_KEY ? process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n') : '';

        // Create JWT
        results.steps.push("Creating JWT");
        const jwt = new JWT({
            email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || '',
            key: privateKey,
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        // Create spreadsheet instance
        results.steps.push("Creating GoogleSpreadsheet instance");
        const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID || '', jwt);

        // Load document info
        results.steps.push("Loading document info");
        await doc.loadInfo();
        results.steps.push(`Document loaded successfully: "${doc.title}"`);

        // Access the first sheet
        results.steps.push("Accessing first sheet");
        const sheet = doc.sheetsByIndex[0];
        results.steps.push(`Sheet accessed: "${sheet.title}"`);

        // Make sure sheet is loaded
        results.steps.push("Loading cell data to check headers");
        await sheet.loadCells('A1:B1');
        results.steps.push("Cell data loaded");

        // Check headers
        const a1 = sheet.getCell(0, 0);
        const b1 = sheet.getCell(0, 1);
        results.steps.push(`Headers found: ${a1.value}, ${b1.value}`);

        // Create row data with proper case-sensitive header names
        results.steps.push("Creating test row data");
        const rowData: Record<string, string> = {};
        rowData[String(a1.value)] = "test-debug-email@example.com";
        rowData[String(b1.value)] = new Date().toISOString();
        results.steps.push(`Row data created: ${JSON.stringify(rowData)}`);

        // Try to add the row
        results.steps.push("Attempting to add row to sheet");
        const newRow = await sheet.addRow(rowData);
        results.steps.push("Row added successfully");

        // Verify row was added
        results.steps.push("Verifying row was added");
        const rows = await sheet.getRows();
        results.steps.push(`Sheet now has ${rows.length} rows (including header)`);

        results.success = true;
        return NextResponse.json(results);
    } catch (error) {
        return NextResponse.json({
            steps: ["Error occurred during test"],
            errors: [error instanceof Error ? error.message : String(error)],
            success: false,
            stack: error instanceof Error ? error.stack : undefined
        });
    }
} 