// Pengecekan angka positif, negatif, atau 0 dengan nested if

// Masukan suatu angka
const number = parseInt(prompt("Masukan bilangan: "));
const prompt = require("prompt-sync")();

// TODO: answer here

if (number >= 0) {
    if (number == 0) {
        console.log("bilangan nol");
    } else {
        console.log("bilangan positif");
    }
} else {
    console.log("bilangan negatif");
}
