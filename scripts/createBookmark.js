const yaml = require('js-yaml');
const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');

module.exports = function createBookmark (_path, data, content) {
    let fontmatter = `---\n${yaml.safeDump(data, { lineWidth: 999 }).trim()}\n---\n\n`;
    mkdirp(path.dirname(_path), (err) => {
        if (err) {
            console.error(err);
        }
        fs.writeFile(_path, `${fontmatter}${content}\n`, (err) => {
            if (err) {
                throw err;
            }
            console.log(`Created: ${_path}`);
        })
    });
};