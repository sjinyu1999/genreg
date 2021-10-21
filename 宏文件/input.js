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
return res;
}
module.exports = input;