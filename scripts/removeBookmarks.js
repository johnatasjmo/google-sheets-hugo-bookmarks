const del = require('del');
const constants = require('../constants');

module.exports = function removeContent () {
    return del(`${constants.paths.bookmarks}/*`);
};
