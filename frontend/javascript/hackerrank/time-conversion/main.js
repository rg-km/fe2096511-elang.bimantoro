// Time Conversion
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */


// Full Problem: https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
  // Write your code here
  // TODO: answer here
  let amPm = s.slice(-2);
  let militaryHour = "";
  if (amPm == "AM") {
    if (s.slice(0, 2) == "12") {
      militaryHour = "00";
    } else {
      militaryHour = s.slice(0, 2);
    }
  } else {
    if (s.slice(0, 2) == "12") {
      militaryHour = "12";
    } else {
      militaryHour = (parseInt(s.slice(0, 2)) + 12).toString();
    }
  }
  return militaryHour + s.slice(2, 8);
}

function main() {
  //var s = readLine();
  var s = '07:05:45PM'; // override input
  var result = timeConversion(s);
  console.log(result);

}

main(); // execute program

module.exports = timeConversion