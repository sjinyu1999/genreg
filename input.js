function input(path){
const fs = require("fs");
var reg = JSON.parse(fs.readFileSync(path));
//console.log("reg=", reg);
return reg;
}
module.exports = {input};