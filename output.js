const path = require("path");

function output(path) {
    const fs = require("fs");
    //console.log(fs);
    fs.writeFile(path, svg, function (err) {
        if (err) {
            return console.error(err);
        }
    });
    return path;
}
module.exports = {output};



