function input(dir) {
  var fs = require("fs");
  var path = require("path");
  var list = [];
  function listFile(dir) {
    var arr = fs.readdirSync(dir);
    arr.forEach(function (item) {
      var fullpath = path.join(dir, item);
      var stats = fs.statSync(fullpath);
      if (stats.isDirectory()) {
        listFile(fullpath);
      } else {
        list.push(fullpath);
      }
    });
    //console.log(list);
    return list;
  }

  var res = listFile(dir);
  //console.log(res);
//   for (i = 0; i < res.length; i++) {
//     console.log(res[i]);   
//      var reg = JSON.parse(fs.readFileSync(res[i]));
//      //console.log("config=",reg.config);
//      reg=reg.reg;
//      //console.log("reg=",reg);  
//      console.log(reg.length);
//     //  for (j = 0; j < reg.length; j++) {
//     //    console.log(reg[j].name);
//     //  }
// }
return res;
}

module.exports = input;
//process = require("process");

//console.log(getAllArgs());
//console.log(getPath("-p"));
// console.log(getPath("-i"));
// console.log(getPath("-o"));


// module.exports.input = input;

// function input(path) {
//     const fs = require("fs");
//     var reg = JSON.parse(fs.readFileSync(path));
//     //console.log("reg=", reg);
//     return reg;
// }
// module.exports = input;
