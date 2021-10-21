const fs = require("fs");
const path = require("path");
var result=[];

function output(format) {
    //res.forEach(function (filename) {
        for(i=0;i<res.length;i++){
            var dirname1=[];
        dirname1 = `svg文件/${res[i]}`;
        //console.log(dirname1);
        //path.basename(filename,'.json')获取路径的最后一个文件名（不包括扩展名）
     //console.log(path.dirname(dirname));
     //path.dirname(dirname)获取路径的目录名
     dirname1 = path.dirname(dirname1);
    //console.log(dirname1);
     result.push(`${dirname1}/${path.basename(res[i], '.json')}.svg`);
     //console.log(dirname1);
     //console.log(result);
     //console.log(result);
     //for(i=0;i<format.length,i<result.length;i++){
        mkdirSync(dirname1);
 function mkdirSync(dirname1){
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
   else  (mkdirSync(path.dirname(dirname1))) 
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
       //   console.info("mkdir success!!!");
          return true;       
  
}
//}
    }
    
    for(i=0;i<format.length,i<result.length;i++){
       // console.log(result[i]);
       // console.log(format[i]);

            
      fs.writeFile(result[i], format[i], function (err) {
          if (err) {
             // console.info("write false!!!");
              return console.error(err);
          }
          //console.info("write success!!!");
      });

  

}
}
           
/*             console.log(format[1]);
            console.log(result[0]); */

        
       // });

module.exports = output;
