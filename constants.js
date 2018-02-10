const fs = require('fs');
const path = require('path');

module.exports = {
    spreadsheet: {
        id: process.env.GOOGLE_SHEETS_ID,
        auth: {
            private_key: process.env.GOOGLE_SHEETS_KEY.replace(/\\n/g, '\n'),
            client_email: process.env.GOOGLE_SHEETS_EMAIL
        }
    },
    paths: {
        bookmarks: path.resolve(__dirname, `./content`)
    }
};
