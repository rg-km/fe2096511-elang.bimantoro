/**
<<<<<<< HEAD
 * Buatlah sebuah fungsi yang menerima berapapun jumlah argumen dalam bentuk angka, 
 * kemudian mengembalikan nilai maksimal dari semua angka tersebut.
=======
 * Buatlah sebuah fungsi yang menerima berapapun jumlah argumen dalam bentuk angka, kemudian mengembalikan nilai maksimal dari semua angka tersebut.
>>>>>>> 466979049e6a25d12227dd7a51f55bb2aefac437
 *
 * max(1, 2, 3, 4, 12, 3, 4) output: 12
 * max(1, 2, 5) output: 5
 * max(1) output: 1
 *
 * Dilarang menggunakan Math.max
 */
const max = (...args) => {
  // TODO: answer here
  let max = args[0];
  for (let i = 0; i < args.length; i++) {
    if (args[i] > max) {
      max = args[i];
    }
  }
  return max;
};


module.exports = max