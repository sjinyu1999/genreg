let svgHeader = `
<svg xmlns="http://www.w3.org/2000/svg" width="810" height="150" viewBox="-8 0 810 150"  xmlns:xlink="http://www.w3.org/1999/xlink">`;

let svgFooter = `</svg>`;

let svgContent = ``;

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
console.log("reg=",reg.reg);

Hsl();
wenzi1();
wenzi2();
KuangJia1();
KuangJia2();
svgContent +=NewLine(0, 20, 801, 20);
svgContent +=NewLine(0, 20, 0, 55);
svgContent +=NewLine(0, 55, 801, 55);
svgContent +=NewLine(801, 20, 801, 55);

svgContent += NewLine(0, 80, 801, 80);
svgContent += NewLine(0, 80, 0, 115);
svgContent += NewLine(0, 115, 801, 115);
svgContent += NewLine(801,80, 801, 115);
svgContent += Zx(776,8,"16");
svgContent += Zx(776,68,"0");


function NewLine(x1, y1, x2, y2) {
	return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="black" stroke-width="1"/>`
}

function Zx(x1,y1,zx) {
	return `<g transform="translate(${x1},${y1})"><text y="6" font-size="13" style='dominant-baseline:middle;text-anchor:middle;'>${zx} </text></g>`
}

function KuangJia1(){
	let x1=801;
	let sum=0;
	for(i=0;i<reg.reg.length;i++){
	sum +=reg.reg[i].bits;
	if(reg.reg[i].bits==1){
		svgContent +=`<line x1="${x1-50}" y1="80" x2="${x1-50}" y2="115" stroke="black" stroke-width="1"/>`;
		x1 -=50;
		//console.log(x1);
	}else{
		while(x1>801-50*sum+50){
			svgContent +=`<line x1="${x1-50}" y1="80" x2="${x1-50}" y2="85" stroke="black" stroke-width="1"/>`;
	        svgContent +=`<line x1="${x1-50}" y1="115" x2="${x1-50}" y2="110" stroke="black" stroke-width="1"/>`;
            x1 -=50;
			//console.log(x1);			
		}
		if(sum<16){
			svgContent +=`<line x1="${801-50*sum}" y1="80" x2="${801-50*sum}" y2="115" stroke="black" stroke-width="1"/>`;
			x1=801-50*sum;
		//	console.log(x1);
		}
			else{
				return 0;
		    }
	}	
	//console.log("第"+(i+1)+"次循环，x1="+x1);
	}
}

function KuangJia2() {
	let x1 = 801;
	let sum = 0;
	for(i = 0; i < reg.reg.length; i++) {
		sum += reg.reg[i].bits;
		if(sum > 16) {
			m = sum - 16;
			j = i;
			if(reg.reg[j].bits == 1) {
				svgContent += `<line x1="${x1-50}" y1="20" x2="${x1-50}" y2="55" stroke="black" stroke-width="1"/>`;
				x1 -= 50;
  //	console.log(x1);
			} else {
				while(x1 > 801 - 50 * m + 50) {
					svgContent += `<line x1="${x1-50}" y1="20" x2="${x1-50}" y2="25" stroke="black" stroke-width="1"/>`;
					svgContent += `<line x1="${x1-50}" y1="55" x2="${x1-50}" y2="50" stroke="black" stroke-width="1"/>`;
					x1 -= 50;
  //	console.log(x1);
				}
				if(sum < 32) {
					svgContent += `<line x1="${801-50*m}" y1="20" x2="${801-50*m}" y2="55" stroke="black" stroke-width="1"/>`;
					x1 = 801 - 50 * m;
				} else {
					return 0;
				}
			}
		}
	//	console.log("第"+(i+1)+"次循环，x1="+x1);
	}
}

function wenzi1() {
	let x=0;
	let y=92;
	let sum=0;
	let sum1=0;
	for(i=0;i<reg.reg.length;i++){
	sum +=reg.reg[i].bits;
	sum1 =sum-reg.reg[i].bits;
	//console.log("sum="+sum);
	//console.log("sum1="+sum1);
	 if(sum<=16){
		 x=801-(sum+sum1)*50/2;
		//console.log("x:"+x);			
		svgContent +=`<g transform="translate(${x},${y})"><text y="6" font-size="13" style='dominant-baseline:middle;text-anchor:middle;'>${reg.reg[i].name} </text></g>`
		svgContent +=`<g transform="translate(${x},${y+24})"><text y="6" font-size="12" style='dominant-baseline:middle;text-anchor:middle;'>${reg.reg[i].attr} </text></g>`
		}else if(sum>16&&sum<=32){
		x=801-((sum-16)+(sum1-16))*50/2;
		//console.log("x:"+x);
		svgContent +=`<g transform="translate(${x},${y-60})"><text y="6" font-size="13" style='dominant-baseline:middle;text-anchor:middle;'>${reg.reg[i].name} </text></g>`
		svgContent +=`<g transform="translate(${x},${y-60+24})"><text y="6" font-size="12" style='dominant-baseline:middle;text-anchor:middle;'>${reg.reg[i].attr} </text></g>`
	}else{
			return 0;
		    }
	}	
	//console.log("第"+(i+1)+"次循环，x1="+x1);
	}

function wenzi2() {
	let x=801;
	let y=68;
	let sum=0;
	let sum1=0;
	for(i=0;i<reg.reg.length;i++){
	sum +=reg.reg[i].bits;
	sum1 =sum-reg.reg[i].bits;
	//console.log("sum="+sum);
	//console.log("sum1="+sum1);
	 if(sum<=16){
		x=801-sum*50;
		//console.log(x);
		svgContent +=`<g transform="translate(${x-25},${y})"><text y="6" font-size="13" style='dominant-baseline:middle;text-anchor:middle;'>${sum} </text></g>`
		svgContent +=`<g transform="translate(${x+25},${y})"><text y="6" font-size="13" style='dominant-baseline:middle;text-anchor:middle;'>${sum-1} </text></g>`
	}else if(sum>16&&sum<=32){
            x=801-(sum-16)*50;
			//console.log(x);			
		svgContent +=`<g transform="translate(${x-25},${y-60})"><text y="6" font-size="13" style='dominant-baseline:middle;text-anchor:middle;'>${sum} </text></g>`
		svgContent +=`<g transform="translate(${x+25},${y-60})"><text y="6" font-size="13" style='dominant-baseline:middle;text-anchor:middle;'>${sum-1} </text></g>`
		}else{
			return 0;
		    }
	}	
	//console.log("第"+(i+1)+"次循环，x1="+x1);
	}

function Hsl() {
	var color = [
	{ "code": "#E6E6E6"},//灰
	{ "code": ""},
    {  "code":  "#FFE6E6"},//粉
	 { "code":  "#F6FFE5"},//果绿
	 { "code":  " #E6FFFB"},//青
	 { "code":  "#FFF9E6"},//淡黄
	{  "code":  "#E6FFE8"},//浅绿
	 { "code":  "#E6F1FF"},//淡蓝
	{ "code":  "#FFFFFF"}//白
];

	let x = 801;
	let y = 20;
	let sum = 0;
	for(i = 0; i < reg.reg.length; i++) {
		//console.log(reg.reg.length);
	let m= reg.reg[i].type;
	let n= reg.reg[i].bits;
	sum+=reg.reg[i].bits;
	//console.log(n);
	let width=n*50;
	//console.log(width);
		if(sum <=16) {
			
			//console.log(m);
				svgContent += `<rect x="${x-sum*50}" y="${y+60}" width="${width}" height="34" style="fill:${color[m].code};"/>`;
				
			} else {
				//console.log(m);
				svgContent += `<rect x="${x-(sum-16)*50}" y="${y}" width="${n*50}" height="34" style="fill:${color[m].code};"/>`;
				}
			
		}
}
//let test = document.getElementById("test");
//test.innerHTML = svg;
let svg = svgHeader + svgContent + svgFooter;

fs.writeFile('ex2.svg',svg,function(err){
	if(err){
		return console.error(err);
	}
});