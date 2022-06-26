"use strict";
// esto es un comentario de una sola linea
/*
   esto es un
   comentario
   de multiples lineas
*/
function addNumbers(...nums) {
    var i;
    var sum = 0;
    // for(i = 0;i<nums.length;i++) { 
    //    sum = sum + nums[i]; 
    // } 
    console.log("sum of the numbers", typeof nums);
}
addNumbers(1);
addNumbers(10, 10, 10, 10, 10);
var days = ["lunes"];
var mytuple = [10, "Hello"];
console.log(typeof mytuple);
