const del = require('del');
const constants = require('../constants');

module.exports = function removeBookmarks () {
    console.log('removeBookmarks')
    return del(`${constants.paths.bookmarks}/*`);
};
