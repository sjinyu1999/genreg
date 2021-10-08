/*var reg = {
    "reg": [
        {"bits": 1, "name": "EN",   "attr": "rw", "type": 7},
        {"bits": 1, "name": "DMA",  "attr": "rw", "type": 7},
        {"bits": 1, "name": "TXEN", "attr": "rw", "type": 7},
        {"bits": 1, "name": "RXEN", "attr": "rw", "type": 7},
        {"bits": 1, "name": "BRK",  "attr": "rw", "type": 7},
        {"bits": 11, "name": "RES",  "attr": "",   "type": 0},
        {"bits": 16, "name": "RES",  "attr": "",   "type": 0}
    ],
    "config":{
        "vspace": 80,
        "hspace": 800,
        "lanes": 2,
        "fontsize": 14,
        "fontfamily": "Arial",
        "bits": 32,
        "bigendian": false,
        "fontweight": "normal",
        "compact": false
    }

}*/
const fs = require("fs");
//var reg = JSON.parse(fs.readFileSync("5.ISR.json"));
//var reg = JSON.parse(fs.readFileSync("4.IER.json"));
var reg = JSON.parse(fs.readFileSync("3.CFGR.json"));
//console.log(reg);
console.log("reg=", reg.reg);