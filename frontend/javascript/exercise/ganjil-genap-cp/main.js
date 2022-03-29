/*
Buatlah sebuah program untuk melakukan cek pada plat nomer yang ada
Setiap plat nomer di pisahkan oleh karakter ";"
- jika paramater kosong maka akan menampilkan "invalid data"
- jika paramater merupakan string kosong maka akan menampilkan "plat tidak ditemukan"
- jika paramater terdapat plat ganjil dan tidak ada plat genap maka akan menampilkan "plat ganjil sebanyak <jumlah plat> dan plat genap tidak ditemukan"
- jika paramater terdapat plat genap dan tidak ada plat ganjil maka akan menampilkan "plat genap sebanyak <jumlah plat> dan plat ganjil tidak ditemukan"
- jika paramater terdapat plat ganjil maupun genap maka akan menampilkan "plat genap sebanyak <jumlah plat> dan plat ganjil sebanyak <jumlah plat>"
*/

function ganjilGenap(plat) {
  // TODO: answer here
  switch (plat) {
    case '':
      return 'plat tidak ditemukan'
    case ';':
      return 'invalid data'
    default:
      let arr = plat.split(';')
      let odd = 0
      let even = 0
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
          even++
        } else {
          odd++
        }
      }
      if (odd === 0 && even === 0) {
        return 'plat ganjil tidak ditemukan dan plat genap tidak ditemukan'
      } else if (odd === 0) {
        return `plat genap sebanyak ${even} dan plat ganjil tidak ditemukan`
      } else if (even === 0) {
        return `plat ganjil sebanyak ${odd} dan plat genap tidak ditemukan`
      } else {
        return `plat genap sebanyak ${even} dan plat ganjil sebanyak ${odd}`
      }
  }
}

console.log(ganjilGenap('2341;3429;864;1309;1276')) //plat genap sebanyak 2 dan plat ganjil sebanyak 3
console.log(ganjilGenap('2347;3429;1305')) //plat ganjil sebanyak 3 dan plat genap tidak ditemukan
console.log(ganjilGenap('864;1308;1276;1432')) //plat genap sebanyak 4 dan plat ganjil tidak ditemukan
console.log(ganjilGenap('')) //plat tidak ditemukan
// console.log(ganjilGenap()) //invalid data belum

module.exports = ganjilGenap