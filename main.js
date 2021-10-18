process = require("process");
function getAllArgs() {
     return process.argv.slice(2);
}
function getPath(string) {
     let args = getAllArgs();
     if (args.length === 0) {
          return "please enter node main.js  -i 指定文件夹 -o 输出文件夹";
     }
     if (args.length > 0) {
          for (let p = 0; p < args.length; p++) {
               if (args[p].startsWith(string)) {
                    return args[p + 1]
               }
          }
     }
}
// console.log(getAllArgs());
// console.log(getPath("-i"));


const input = require("./input.js");
const data = require('./data.js');
//const mkdirsSync = require('./output.js');
const output = require('./output.js');
var fs = require("fs");
res = input(getPath("-i"));
const path = require("path");
var reg=[];
res.forEach(function(filename){
     //console.log(filename);
     reg = JSON.parse(fs.readFileSync(filename));
     reg = reg.reg;
     //console.log(reg);
     data(reg);
     //console.log(svg);
     //console.log(path.basename(filename));
     //path.basename(filename,'.json')获取路径的最后一个文件名（不包括扩展名）
     //output(`svg文件/${filename}`);
     dirname = `svg文件/${filename}`;
     dirname = path.dirname(dirname);
     result = `${dirname}/${path.basename(filename, '.json')}.svg`;
    output(dirname,result,svg);
    //output(`svg文件/${filename}/${path.basename(filename,'.json')}.svg`,svg);
     });