// Buat kalkulator objek dengan 5 methods:
// - read() meminta (prompt) dua nilai dan menyimpannya sebagai properti objek.
// - sum() mengembalikan jumlah nilai yang disimpan.
// - substract() mengurangi jumlah nilai yang disimpan.
// - multiply() mengalikan nilai yang disimpan.
// - division() membagi nilai yang disimpan.
// const prompt = require("prompt-sync")();
// const angka1 = parseInt(prompt("Masukkan bialngan pertama: "));
// const angka2 = parseInt(prompt("Masukkan bialngan kedua: "));

let calculator = {
  // Tulis kode di sini
  // TODO: answer here
  num1: 0,
  num2: 0,
  read(a, b) {
    this.num1 = a;
    this.num2 = b;
  },
  sum() {
    return this.num1 + this.num2;
  },
  substract() {
    return this.num1 - this.num2;
  },
  multiply() {
    return this.num1 * this.num2;
  },
  division() {
    return this.num1 / this.num2;
  }
  };


const num1 = 10;
const num2 = 5;
calculator.read(num1, num2);
console.log(calculator.sum());
console.log(calculator.substract());
console.log(calculator.multiply());
console.log(calculator.division());