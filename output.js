const fs = require("fs");
const path = require("path");

function output(dirname,path1, format) {  
    //console.log(format); 
    if (fs.existsSync(dirname)) {
        console.info("file has existed!!!");
        fs.writeFile(path1, format, function (err) {
            if (err) {
               // console.info("write false!!!");
                return console.error(err);
            }
            //console.info("write success!!!");
        });
        return true;
    }
     else if (output(path.dirname(dirname))) {
            fs.mkdirSync(dirname);
            fs.writeFile(result, format, function (err) {
                if (err) {
            //        console.info("write false!!!");
                    return console.error(err);
                }
            //    console.info("write success!!!");
            });
            //console.info("mkdir success!!!");
           // console.info("mkdir success!!!");
            return true;       
    }
}
// function output(path1,format) {
//         fs.writeFile(path1, format, function (err) {
//             if (err) {
//                 console.info("write false!!!");
//                 return console.error(err);
//             }
//             console.info("write success!!!");
//         });  
// }

module.exports = output;
//module.exports = mkdirsSync;
