/*var shedA = function(){
    console.log("510 litres/day");
    document.getElementById("shedA").innerHTML = "510 litres/day";
};
shedA();
var shedB= function(){
    console.log("308 litres/day");
};
shedB();
var shedC = function(){
    console.log("486 litres/day");
};
shedC();
var shedD = function(){
    console.log("572 litres/day");
};
shedD();
var totalProduction = function(){
    console.log("1876 litres/day")
};
totalProduction();
*/
class Milk Production {

}
shedA = new Shed("A", 0);
shedB = new Shed("A", 0);
shedC = new Shed("A", 0);
shedD = new Shed("A", 0);

function updateProduction(e) {
    e.preventDefault();
    selectShed = document.getElementById("shed").nodeValue;
    production = parseInt(document.getElementById("Total-production").nodeValue;
if (selectedShed == ("A") {
        shedA.production = production;
    }
}else.if (selectedShed == ("B") {
    shedB.production = production;
}else.if (selectedShed == ("C") {
    shedC.production = production;
}else (selectedShed == ("D") {
    shedD.production = production;



















