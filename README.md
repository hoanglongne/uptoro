This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Google Sheets Waitlist Integration

This project includes integration with Google Sheets to store waitlist emails. To set up:

1. Create a project in [Google Cloud Console](https://console.cloud.google.com/)
2. Enable the Google Sheets API for your project
3. Create a service account with appropriate permissions
4. Generate a JSON key for the service account
5. Create a Google Sheet and share it with the service account email
6. Create a `.env.local` file with the following variables:

```
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account-email@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour Private Key Here\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your-google-sheet-id-here
```

### Important Notes About the Private Key

When copying your private key from the JSON file:
1. Include the entire key including `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----` 
2. Make sure it's enclosed in double quotes `"..."` in your .env.local file
3. Replace all newlines in the key with `\n` characters
4. Do not add any extra spaces

Example of correct formatting:
```
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEF...long string of characters...\nkey content continues\n-----END PRIVATE KEY-----\n"
```

Note: The Google Sheet ID is found in the URL of your sheet: `https://docs.google.com/spreadsheets/d/[THIS-IS-YOUR-SHEET-ID]/edit`

7. Make sure the first sheet in your Google Sheet has columns for `email` and `timestamp`.
