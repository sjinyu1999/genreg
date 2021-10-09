const { reg } = require("./input");
console.log("reg=", reg.reg);
console.log(reg.reg.length);
const data = require('./data.js');
const output = require('./output.js');
function test() {
     module.exports = { reg, data, output };
}
test();
