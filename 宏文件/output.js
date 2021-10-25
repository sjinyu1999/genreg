const fs = require("fs");
const path = require("path");
function output(format) {
          //console.log(format);
          format = format.toString();
          format = format.replace(/,/g, "");
          fs.writeFile("head文件/mm32.h", format, function (err) {
               if (err) {
                    console.info("write false!!!");
                    return console.error(err);
               }
               console.info("write success!!!");});
          }

     module.exports = output;
