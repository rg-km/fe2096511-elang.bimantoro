//nomer 4
// Menggunakan switch case, petakan nilai ujian di bawah ini ke dalam Nilai A B C D E
// A = 91-100
// B = 71-90
// C = 61-70
// D = 51-60
// E = <= 50
const prompt = require("prompt-sync")();
// Masukan suatu angka
var nilai = parseInt(prompt("Masukan nilai: "));
var grade = "";

// // TODO: answer here
switch (true){
    case nilai > 90 && nilai <= 100 : grade = "A";
    break;
    case nilai >70 && nilai < 91 : grade = "B";
    break;
    case nilai >60 && nilai < 70 : grade = "C";
    break;
    case nilai >50 && nilai < 60 : grade = "D";
    break;
    case nilai >=0 && nilai < 50 : grade = "E";
    break;
    default : grade = "Tidak terdefinisi";
    
}

console.log(grade);
