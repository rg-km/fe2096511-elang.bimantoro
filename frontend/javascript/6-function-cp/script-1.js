// Mengembalikan teks yang berkebalikan
//
// contoh: 
// teks = hello world
// hasil:
// dlrow olleh

const prompt = require("prompt-sync")();
// Masukkan input dari user
const string = prompt('Masukan teks: ');
const result = reverseString(string);

function reverseString(str) {
    // TODO: answer here
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

// print hasil
console.log(result);