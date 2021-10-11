process = require("process");
function getAllArgs() {
     return process.argv.slice(2);
}
function getPath(string) {
     let args = getAllArgs();
     if (args.length === 0) {
          return "./input.js";
     }
     if (args.length > 0) {
          for (let i = 0; i < args.length; i++) {
               if (args[i].startsWith(string)) {
                    return args[i + 1]
               }
          }
     }
}
console.log(getAllArgs());
console.log(getPath("-i"));
console.log(getPath("-o"));

function test1() {
     const { input } = require("./input.js");
     //console.log({input});
     //var reg = input("3.CFGR.json");
     var reg = input(getPath("-i"));
     //console.log("reg=",reg.reg);
     return reg.reg;
}
//console.log(test1());
function test2() {
     const { output } = require('./output.js');
     output(getPath("-o"));
}
function test() {
     reg = test1();
     //console.log("reg=",reg);
     var data = require('./data.js');
     module.exports = data;
     test2();
     // module.exports = output;
}
test();