// Mengembalikan pola * yang menurun di setiap barisnya
//
// contoh: 
// baris = 5
// hasil:
// *****
// ****
// ***
// **
// *

// Masukan jumlah baris
const n = parseInt(prompt("Masukan jumlah baris: "));

// TODO: answer here
const prompt = require("prompt-sync")();
const input = parseInt(prompt("Masukan jumlah baris: "));

    let hasil = '';
    for (let i = 0; i < input; i++) {
        for (let j = 0; j < input-i; j++) {
            hasil += "*";
        }
        hasil += "\n";
        
    }
console.log(hasil);