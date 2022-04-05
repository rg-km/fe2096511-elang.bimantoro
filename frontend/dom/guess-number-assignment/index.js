/*
Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.
*/

// let newGameBtn = tombol untuk melakukan restart game
// let randomNumber = generate random number dari 1 sampai 10
// let message = element untuk menampilkan pesan
// let displayScore = element untuk menampilkan score
// let input = element untuk memasukan data
// let checkBtn = tombol untuk melakuan pengecekan angka pada input
// let score = nilai yang akan ditampilakan

// TODO: answer here
const randomNumber = Math.ceil(Math.random() * 10);
const scoretext = document.getElementsByClassName('score')[0];
const checkBtn = document.getElementsByClassName('check')[0];
const newGameBtn = document.getElementsByClassName('new-game')[0];
const input = document.getElementsByClassName('input') [0];
const message = document.getElementsByClassName('message')[0];
const numberText = document.getElementsByClassName('number')[0];
let score = 10;

newGameBtn.addEventListener("click", resetGame);
checkBtn.addEventListener("click", checkNumber);

function displayMessage(msg) {
  // TODO: answer here
  message.innerHTML = msg;
}
  

function resetGame() {
  // TODO: answer here
  //dilarang menghapus code dibawah ini!
  document.getElementById('hidden-number').innerHTML = randomNumber;
}

function checkNumber() {
  // TODO: answer here
 const value = input.value;
 console.log(input.value, randomNumber);
 if (value < 1 || value > 10) {
  displayMessage('Input angka antara 1-10');
} else{
  if (score > 0) {
    if (value < randomNumber) {
       displayMessage("Your number is too small");
       score--;
       scoretext.innerHTML = score;
     } else if (value > randomNumber) {
       displayMessage("Your number is too big");
       score--;
       scoretext.innerHTML = score;
     } else {
       displayMessage("Your number is correct");
       numberText.innerHTML = randomNumber;
     }
  } else {
     displayMessage("Game Over");
     scoretext.innerHTML = "0";
  }
}
   
}

//dilarang menghapus code dibawah ini!
document.getElementById('hidden-number').innerHTML = randomNumber