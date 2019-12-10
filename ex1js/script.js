
/*let Cars=[`Audi`,`Renualt`,`Mecedes`,`Peugort`,`Nissian`,`Ford`];
console.table(Cars);
console.table(Cars[0]);
console.table(Cars[1]);
console.table(Cars[2]);
console.table(Cars[3]);
console.table(Cars[4]);
console.table(Cars[5]);

let ave=total (Cars/6);
console.table(ave(Cars[0,1,2,3,4,5])/6);*/

var millage = [600, 200, 100, 500, 300, 60];

var num1 = parseInt(prompt("Number 1: "));
var num2 = parseInt(prompt("Number 2: "));
var num3 = parseInt(prompt("Number 3: "));
var num4 = parseInt(prompt("Number 4: "));
var num5 = parseInt(prompt("Number 5: "));
var num6 = parseInt(prompt("Number 6: "));


document.getElementById('num1').innerHTML = `Num1: ${600}`;
document.getElementById('num2').innerHTML = `Num2: ${200}`;
document.getElementById('num3').innerHTML = `Num3: ${100}`;
document.getElementById('num4').innerHTML = `Num4: ${500}`;
document.getElementById('num5').innerHTML = `Num5: ${300}`;
document.getElementById('num6').innerHTML = `Num6: ${60}`;

let nums = [num1,num2,num3,num4,num5,num6];

var sum = parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4) + parseInt(num5) + parseInt(num6);
var sum = parseInt(600) + parseInt(200) + parseInt(100) + parseInt(500) + parseInt(300) + parseInt(60);


var avg = (parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4) + parseInt(num5) + parseInt(num6))/nums.length;
var avg = (parseInt(600) + parseInt(200) + parseInt(100) + parseInt(500) + parseInt(300) + parseInt(60))/6;

document.getElementById('sum').innerHTML = `Sum: ${sum} `;
document.getElementById('avg').innerHTML = `Average: ${avg} `;

function ave(num1,num2,num3,num4,num5,num6){
    return(num1+num2+num3+num4+num5+num6)/6;
}
    alert("Sum is: " +sum);
    alert("Average is: " +avg);




