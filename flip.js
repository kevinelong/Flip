// const flip = (d, a) => { // d is direction R/L and a is the array list
//     if (d === "R") {
//         return a.sort() //return exits the function
//     }
//     //L is implied
//     // return a.sort((a, b) => b - a)
//     return a.sort().reverse()
// }

// d is direction R/L and a is the array list
//const flip = (d, a) => d === "R" ? a.sort() : a.sort().reverse(); //WRONG BECAUSE IT ALPHABETIZED 11 before 2
const flip = (d, a) => d === "R" ? a.sort((a, b) => a - b) : a.sort((a, b) => b - a);

console.log(flip('R', [3, 2, 1, 2]), [1, 2, 2, 3]);
console.log(flip('L', [1, 4, 5, 3, 5]), [5, 5, 4, 3, 1]);
console.log(flip('R', [ 13, 2, 4, 7, 93 ]),[ 2, 4, 7, 13, 93 ]);
console.log(flip('L', [1, 4, 15, 3, 5]), [15, 5, 4, 3, 1]);

/*
expected [ 13, 2, 4, 7, 93 ] to deeply equal [ 2, 4, 7, 13, 93 ]
Completed in 3ms
random tests
expected [ Array(23) ] to deeply equal [ 97, 87, 85, 83, 73, 69, 68, …(16) ]
*/
age = 17
console.log(age >= 18 ? "R" : "NOT R");

// // Since Node 10, we're using Mocha.
// // You can use `chai` for assertions.
// const chai = require("chai");
// const assert = chai.assert;
// // Uncomment the following line to disable truncating failure messages for deep equals, do:
// // chai.config.truncateThreshold = 0;
// // Since Node 12, we no longer include assertions from our deprecated custom test framework by default.
// // Uncomment the following to use the old assertions:
// // const Test = require("@codewars/test-compat");

// describe("Solution", function () {
//     it("fixed tests", function () {
//         assert.deepEqual(flip('R', [3, 2, 1, 2]), [1, 2, 2, 3]);
//         assert.deepEqual(flip('L', [1, 4, 5, 3, 5]), [5, 5, 4, 3, 1]);
//     });
// });