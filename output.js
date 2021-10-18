const fs = require("fs");
const path = require("path");

function output(format) {
    res.forEach(function (filename) {
        dirname = `svg文件/${filename}`;
        //path.basename(filename,'.json')获取路径的最后一个文件名（不包括扩展名）
     console.log(path.dirname(dirname));
     //path.dirname(dirname)获取路径的目录名
     dirname = path.dirname(dirname);
     result = `${dirname}/${path.basename(filename, '.json')}.svg`;
 //console.log(dirname);
            mkdirSync(dirname);
       function mkdirSync(dirname){
        // //递归创建文件夹
        if (fs.existsSync(dirname)) {
            console.info("file has existed!!!");
            fs.writeFile(result, format, function (err) {
                if (err) {
                //    console.info("write false!!!");
                    return console.error(err);
                }
               // console.info("write success!!!");
            });
            return true;
    }
         else if (mkdirSync(path.dirname(dirname))) {
                fs.mkdirSync(dirname);
                fs.writeFile(result, format, function (err) {
                    if (err) {
                //        console.info("write false!!!");
                        return console.error(err);
                    }
                //    console.info("write success!!!");
                });
                //console.info("mkdir success!!!");
                return true;       
        }
    }
    });
}
module.exports = output;
