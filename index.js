//" 1.
//    function counter(){
//     var counter = 0;

//     function IncreaseCounter() {
//         return counter += 1;
//     };

//     return IncreaseCounter;
// }

// // 2

// var counter = counter();
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());

// //answer : 

// console.log("alert 1");
// console.log("alert 2");
// console.log("alert 3");
// console.log("alert 4");



// // 3.
// let count = 0;
// (function immediate() {
//     if (count === 0) {
//       let count = 1;
//       console.log(count); // What is logged?
//     }
//     console.log(count); // What is logged?
//   })();

//   // Print 1 : answer
// //   Print 0 : answer

// // 4. 

// for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i); // What is logged?
//     }, 1000);
//   }

  //answer : Print 3

// 5. Write a code to calculate area of a rectangle using inner function. In
//  this case outer function should accept parameter length and inner function should accept parameter breadth.

// function rectangle(length){
    

//    return function Inner(breadth){
//        const area = length*breadth;
//        console.log(area);
//     }
// }

// const res = rectangle(5);
// res(3);

// //7.Take a variable in outer function and create an inner function to increase the counter every time it is called

// const g = function(){
//   let a =0;
// return  function(){
//   a ++;
//  console.log(`Now the count is ${a}`);

// }

// }

// const f = g();
// f();
// f();
// f();

// // 8. "Print Output

// var a = 12;
// (function () {
//   alert(a);
// })(); 
// console.log("this page says 12");

// 9. 
// var a = 10;
// var x = (function () {
//   var a = 12;
//   return function () {
//     alert(a);
//   };
// })();
// x();
// console.log("this page says 12");

// 10.
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);

// output-
// outerArg = 123
// innerArg = 456
// outerVar = a
// innerVar = b
// globalVar = xyz
