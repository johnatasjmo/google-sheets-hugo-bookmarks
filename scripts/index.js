const path = require('path');
const spreadsheet = require('google-spreadsheet');
const createBookmark = require('./createBookmark');
const removeBookmarks = require('./removeBookmarks');
const md5 = require('./md5');
const constants = require('../constants.js');

removeBookmarks()
    .then(() => {

        const sheet = new spreadsheet(constants.spreadsheet.id);

        sheet.useServiceAccountAuth(constants.spreadsheet.auth, function (err) {
            sheet.getRows(1, function (err, rows) {
                rows.forEach(row => {
                    createBookmark(
                        path.resolve(constants.paths.bookmarks, `${md5(row.src)}.md`), {
                            src: row.src,
                            type: row.type,
                            tags: row.tags.split(',').map(r => r.trim())
                        },
                        row.content || ''
                    );
                })
            });
        });

    })
    .catch(err => {
        console.log(`Error: `, err);
    });

