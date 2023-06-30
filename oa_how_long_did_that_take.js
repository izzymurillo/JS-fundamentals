// // How long did that take? (Optional)

// // Calculating prime numbers
// // Let's start with a prototype function to calculate if a number is prime...

Number.prototype.isPrime = function () {
  let squareRoot = Math.sqrt(this);
  //Math.sqrt() suggested by Vincent
  for (let i = 2; i < squareRoot; i++) {

    if (this % i === 0) {
      return false;
    }
  }
  return true;
};
// NEED THIS EXPLAINED ====> HOW DOES THIS WORK????????????? //

// // and then see how long it takes to find the 10,000th prime number.

const { performance } = require("perf_hooks");
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
// while (primeCount < 1e4) {
while (primeCount < 1e6) {

  if (num.isPrime()) {
    primeCount++;
  }
  num++;
}
// console.log(`The 10,000th prime number is ${num - 1}`);
// // (OUTPUT ON TERMINAL)
// // The 10,000th prime number is 104729
// // This took 69015.66930001974 milliseconds to run
// console.log(`The 100,000th prime number is ${num - 1}`);
// // (OUTPUT ON TERMINAL)
// The 100,000th prime number is 1297001
// This took 6852.581299990416 milliseconds to run
console.log(`The 1,000,000th prime number is ${num - 1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);


// /*Calculating primes is hard work; as the numbers get bigger it takes more and more work to see if they are evenly divisible by smaller numbers, and division is a already a slow operation on CPUs (as much as 6 times slower than multiplication). There are some tricks we can use to speed this up though, for instance we don't need to search past the square root of the number we are checking to see if it is evenly divisible by smaller numbers. Try rewriting the isPrime() function above and seeing how much quicker this runs.*/

// =========================================================================

// Fibonacci

// Which implementation of Fibonacci should be faster? ===> (ITERATIVE IS FASTER PER OUTPUT BELOW)

// // recursive
// function rFib( n ) {
//     if ( n < 2 ) {
//         return n;
//     }
//     return rFib( n-1 ) + rFib( n-2 );
// }
// rFib(20); 

// console.log(rFib(0));
// console.log(rFib(1));
// console.log(rFib(2));
// console.log(rFib(3));
// console.log(rFib(4));
// console.log(rFib(5));
// console.log(rFib(6));
// console.log(rFib(7));
// console.log(rFib(8));
// console.log(rFib(9));
// console.log(rFib(10));
// console.log(rFib(11));
// console.log(rFib(12));
// console.log(rFib(13));
// console.log(rFib(14));
// console.log(rFib(15));
// console.log(rFib(16));
// console.log(rFib(17));
// console.log(rFib(18));
// console.log(rFib(19));
// console.log(rFib(20));


// // OUTPUT [Done] exited with code=0 in 0.348 seconds


// // iterative
// function iFib( n ) {
//     const vals = [ 0, 1 ];
//     while(vals.length-1 < n) {
//         let len = vals.length;
//         vals.push( vals[len-1] + vals[len-2] );
//     }
//     return vals[n];
// }
// iFib(20);
// // // OUTPUT [Done] exited with code=0 in 0.156 seconds

// =========================================================================

// Reversing a string

// Can we reverse a string more efficiently?

// const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
// const reversed1 = story.split("").reverse().join("");

// Hint:
// Can this be written using one loop?

// =========================================================================

// Rewrite isPrime() to calculate primes faster

// Try calculating the 100,000th and 1,000,000th prime numbers

// Determine if the iterative or recursive Fibonacci function is faster

// Write a more efficient function to reverse a string