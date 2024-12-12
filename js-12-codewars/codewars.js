/*
Complete the following CodeWars exercises. 

1. Create Phone Number
https://www.codewars.com/kata/525f50e3b73515a6db000b83 

2. Find the odd int 
https://www.codewars.com/kata/54da5a58ea159efa38000836

3. Find the unique number
https://www.codewars.com/kata/585d7d5adb20cf33cb000235

4.Meeting
https://www.codewars.com/kata/59df2f8f08c6cec835000012

5. Which are in?
https://www.codewars.com/kata/550554fd08b86f84fe000a58

6. Make the Deadfish Swim
https://www.codewars.com/kata/51e0007c1f9378fa810002a9

7. String repeat
https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

8. Invert values
https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad

9. Number of People in the Bus
https://www.codewars.com/kata/5648b12ce68d9daa6b000099

10. Sum without highest and lowest number
https://www.codewars.com/kata/576b93db1129fcf2200001e6


*/

/** Optional
 * Is a number prime?
 * https://www.codewars.com/kata/5262119038c0985a5b00029f
 *
 * Persistent Bugger
 * https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
 *
 * Build a pile of Cubes
 * https://www.codewars.com/kata/5592e3bd57b64d00f3000047
 */
// let num = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];
// for (const element of num) {
//   let num33 = 0;
//   for (const element1 of num) {
//     if (element == element1) {
//       num33 += 1;
//     }
//   }
//   if (num33 % 2 == 1) {
//     console.log(element);
//     break;
//   }
// }
// function findOdd(A) {
//     for (const element of a) {
//     let num33 = 0;
//     for (const element1 of num) {
//       if (element == element1) {
//         num33 += 1;
//       }
//     }
//     if (num33 % 2 == 1) {
//     return (element);
//       break;
//     }
//   }

//   }
// function findUniq(arr) {
//   for (const element of arr) {
//     let num3 = 2;
//     for (const element1 of arr) {
//       if (element == element1) {
//         num3 += 2;
//       }
//     }
//     if (num3 === 4) {
//       return element;
//       break;
//     }
//   }
// }

// console.log(findUniq([1, 0, 0]));
// function repeatStr (n, s) {
//     return n.repeat(s);
//   }
// function invert(array) {
//   let num = [];
//   for (const element of array) {
//     if (element > 0) {
//       num.push(element * -1);
//     } else num.push(element);
//   }

//   return num;
// }
// invert([1, -2, 3, -4, 5]);
// console.log(6 * -1);

// var number = function (busStops) {
//   let num1 = 0;
//   let num2 = 0;
//   for (const element of busStops) {
//     num1 += element[0];
//     num2 += element[1];
//   }
//   return num1 - num2;
// };
// console.log(
//   number([
//     [10, 0],
//     [3, 5],
//     [5, 8],
//   ])
// );

// function sumArray(array) {
//   console.log(typeof array);
//   console.log(typeof array);
//   console.log(array);

//   if (array == null) {
//     return 0;
//   } else if (array.length > 3) {
//     array.sort((a, b) => a - b);
//     let num = array.slice(1, array.length - 1);
//     let num22 = 0;
//     num22 = num.reduce((a, b) => a + b);
//     return num22;
//   } else return 0;
// }

// console.log(sumArray([6, 2, 1, 8, 10]));
