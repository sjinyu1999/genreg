function data(reg) {
    var fs = require("fs");
    var path = require("path");
    reg = [];
    let define = [];
    let define2 = [];
    let bitname = [];
    res.forEach(function (filename) {
        let Registername = [];
        IPnanedir = path.dirname(filename);
        IPnane = path.basename(IPnanedir);
        Registername = path.basename(filename, '.json');
        if (Registername.indexOf(".") == 1) {
            Registername = path.extname(Registername);
            Registername = Registername.split('.')[1];
        } else {
            Registername = Registername;
        }
        reg = JSON.parse(fs.readFileSync(filename));
        reg = reg.reg;
        /*     channal.push(reg);
            channal.forEach(function (regarray) {
                let sum=0;
            for (i = 0; i < regarray.length; i++) {
                bitmask = regarray[i].bits;
                console.log(regarray);
                //console.log(bitmask);
                sum += bitmask;
                bitmask = bitmask.toString(16);
                console.log(sum);
            }
        });
                 console.log( regarray);*/
        let sum = 0;
        let define1 = [];
        for (i = 0; i < reg.length; i++) {
            bitmask = reg[i].bits;
            //console.log(bitmask);
            sum += bitmask;
            let sum1 = sum - bitmask;
            bitmask1 = Math.pow(2, bitmask) - 1;
            bitmask1 = bitmask1.toString(16);
            if (bitmask1 >= 0 || bitmask1 < 16) {
                bitmask1 = "(0x0" + bitmask1.toUpperCase() + "U";
            } else {
                bitmask1 = "(0x" + bitmask1.toUpperCase() + "U";
            }
            bitmask = bitmask.toString(16);
            bitname = reg[i].name;
            if (bitname = reg[i].name && bitname.indexOf(bitname) > -1 && bitname != "RES" && bitname != "RES.") {
                bitname = reg[i].name;
                //right = i.toString(16);
                //right = "(0x0" + right.toUpperCase() + "U";
                bitname = reg[i].name;
                Rbname = Registername + "_" + bitname;
                define = '#define\t';
                head1 = define + IPnane + "_" + Rbname + "_Pos";
                head2 = "(" + (sum1) + ")\n";
                head = head1.toString().padEnd(60) + head2;
                left1 = define + IPnane + "_" + Rbname;
                left2 = bitmask1 + " << " + IPnane + "_" + Rbname + "_Pos)\n";
                left = left1.toString().padEnd(60) + left2;
                //console.log(left);
                define = head + left;
                define1.push(define);

            }
        }
        define2.push(define1);
        //console.log(define2);
    });
    return define2;
}
module.exports = data;
