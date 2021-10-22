const fs = require("fs");
const path = require("path");
var result = [];
function output(format) {
     for (i = 0; i < res.length; i++) {
          dirname1 = `head文件/${res[i]}`;
          dirname1 = path.dirname(dirname1);
          result.push(`${dirname1}/${path.basename(res[i], '.json')}.h`);
          mkdirSync(dirname1);
          function mkdirSync(dirname1) {
               // //递归创建文件夹
               if (fs.existsSync(dirname1)) {
                    //   console.info("file has existed!!!");
                    //     //console.log(result);

                    // fs.writeFile(result[i], format[i], function (err) {
                    //     if (err) {
                    //         console.info("write false!!!");
                    //         return console.error(err);
                    //     }
                    //     console.info("write success!!!");
                    // });

                    return true;
               }
               else (mkdirSync(path.dirname(dirname1)))
               fs.mkdirSync(dirname1);
               //  for(i=0;i<svgs.length;i++){
               //console.log(format[i]);
               //     format=svgs[i];
               // fs.writeFile(result, format, function (err) {
               //     if (err) {
               //     //    console.info("write false!!!");
               //         return console.error(err);
               //     }
               //    // console.info("write success!!!");
               // });
               //  }
               console.info("mkdir success!!!");
               return true;

          }
     }
     for (i = 0; i < format.length, i < result.length; i++) {
          format1 = format[i].toString();
          format1 = format1.replace(/,/g, "");
          //console.log(format1);
          //console.log(result[i]);
          fs.writeFile(result[i], format1, function (err) {
               if (err) {
                    console.info("write false!!!");
                    return console.error(err);
               }
               console.info("write success!!!");
          });
     }
}
     module.exports = output;
