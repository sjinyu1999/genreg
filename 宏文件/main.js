process = require("process");
function getAllArgs() {
     return process.argv.slice(2);
}
function getPath(string) {
     let args = getAllArgs();
     if (args.length === 0) {
          return "please enter node main.js  -i 指定文件夹";
     }
     if (args.length > 0) {
          for (let p = 0; p < args.length; p++) {
               if (args[p].startsWith(string)) {
                    return args[p + 1];
               }
          }
     }
}
console.log(getAllArgs());
console.log(getPath("-i"));

const input = require("./input.js");
const data = require('./data.js');
const output = require('./output.js');
const fs = require("fs");
res = input(getPath("-i"));
define2=data(res);
//console.log(define2);
output(define2);
