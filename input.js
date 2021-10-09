//module.exports=function  input(){
const fs = require("fs");
//var reg = JSON.parse(fs.readFileSync("5.ISR.json"));
//var reg = JSON.parse(fs.readFileSync("4.IER.json"));
var reg = JSON.parse(fs.readFileSync("3.CFGR.json"));
//console.log(reg);
//console.log("reg=", reg.reg);
//console.log("reg=", reg.reg.length);
module.exports.reg = reg;
//}
