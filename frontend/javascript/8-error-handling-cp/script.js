// Buatlah fungsi yang mengembalikan nama bulan dari array berdasarkan nilai bilangan yang dikirim ke fungsi tersebut. 
// Jika nilainya tidak sesuai dengan bulan (1-12), kembalikan error 'Masukan salah. Input bulan antara 1-12'.
//
// Contoh 1
// Input: 3
// Output: "Bulan ke-3 adalah Maret"
//
// Contoh 2
// Input: 15
// Output: "Masukan salah. Input bulan antara 1-12"

  // TODO: answer here
function angkaPalindrome(num) {
  let leftSide = 1;
  let rightSide = 2;

  while (leftSide !== rightSide) {
    num++
    let string = num.toString();
    leftSide = string.slice(0, Math.ceil(string.length / 2));
    rightSide = string.slice(Math.floor(string.length / 2), string.length).split("").reverse().join("");
  }
  return num;
}

console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(17)); // 22
console.log(angkaPalindrome(175)); // 181