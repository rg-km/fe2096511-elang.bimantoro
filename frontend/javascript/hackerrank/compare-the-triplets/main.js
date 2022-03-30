// Compare the Triplets
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */


// Full Problem: https://www.hackerrank.com/challenges/compare-the-triplets/problem

function compareTriplets(a, b) {
  // Write your code here
  // TODO: answer here
  let alice = 0
  let bob = 0
  for (let i = 0; i < a.length; i++) {
  //  console.log(a[i], b[i]);
    if (a[i] > b[i]) {
      alice++;
    }else if (b[i] > a[i]){
      bob++;
    }
  }
  return [alice, bob]
}

function main() {

  const a = [5, 6, 7] // override input
  const b = [3, 6, 10] // override input

  const result = compareTriplets(a, b);

  console.log(result)
}

main() // execute program

module.exports = compareTriplets