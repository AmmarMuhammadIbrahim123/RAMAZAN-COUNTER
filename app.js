// var num= 86400000*30;
// console.log(num);

var currDate=new Date();
var ramazanDate= new Date("11,march,2024");
var diff=ramazanDate-currDate;
var daysLeft=diff/86400000
var monthLeft=diff/2592000000;

console.log("DATE OF RAMAZAN:" + ramazanDate);
console.log("CURRENT DATE:" + " " + currDate);
console.log(  "DAYS LEFT IN RAMAZAN:" + " " + Math.floor(daysLeft));
console.log("MONTHS LEFT IN RAMAZAN:" +(monthLeft));

