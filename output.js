function output() {
    const fs = require("fs");
    //console.log(fs);
    fs.writeFile('ex2.svg', svg, function (err) {
        if (err) {
            return console.error(err);
        }
    });
}
module.exports = output();



