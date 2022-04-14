const Player = require("../11-oop-steal-gold-cp/index");
class Thief extends Player {
  constructor(name) {
    super(name);
    this.job = "Thief";
  }
  
  robbedBlind() {
    // TODO: answer here
    this.setStealChance(0.75);
    this.setGold(this.getGold() - 10);
    if (this.getGold() < 10) {
      return "Aku terlalu miskin";
    } else {
      return "Berhasil mencuri 10 gold";
    }
  }
  
  steal(player) {
    // TODO: answer here
    if (this.stealChance > player.randomizer() || player.getGold() < 5) {
      if (player.getGold() < 5) {
        return "Lawan terlalu miskin";
      } else {
        player.setGold(player.getGold() - 5);
        this.setGold(this.getGold() + 5);
        return "Berhasil mencuri 5 gold";
      }
    } else {
      return "Gagal mencuri, coba lain kali";
    }
  }
}

// 1. Class `Trickster` yang memiliki tambahan job dengan value thief, dan skill `distractionPurse` berupa function.

// 2. `distractionPurse` memiliki efek yaitu, ketika class ini kecurian uang, dia memiliki 25% chance untuk mencuri balik 10 gold.
//    - Apabila total uang lawan kurang dari 10 gold, curi semua uang lawan. Kembalikan message "Berhasil mencuri balik semua uang lawan"
//    - Apabila berhasil uang dan uang lawan lebih dari 10 gold, kembalikan message "Berhasil mencuri balik 10 gold"
//    - Apabila gagal, kembalikan message "Gagal mencuri balik"

class Trickster extends Player {
  constructor(name) {
    super(name);
    this.distractionPurseChance = 0.25;
    this.job = "Trickster";
  }
  
  setDistractionPurseChance(chance) {
    // TODO: answer here
    
  }
  
  getDistractionPurseChance() {
    // TODO: answer here
    return this.distractionPurseChance;
  }
  
  distractionPurse(player) {
    const rng = this.randomizer();
    // TODO: answer here
    if (rng < this.distractionPurseChance) {
      player.setGold(player.getGold() - 10);
      this.setGold(this.getGold() + 10);
      if (player.getGold() < 10) {
        return "Berhasil mencuri semua uang lawan";
      } else {
        return "Berhasil mencuri 10 gold";
      }
    } else {
      return "Gagal mencuri, coba lain kali";
    }
  }

  steal(player) {
    // TODO: answer here
    if (this.stealChance > player.randomizer() || player.getGold() < 5) {
      if (player.getGold() < 5) {
        return "Lawan terlalu miskin";
      } else {
        player.setGold(player.getGold() - 5);
        this.setGold(this.getGold() + 5);
        return "Berhasil mencuri 5 gold";
      }
    } else {
      return "Gagal mencuri, coba lain kali";
    }
  }
}

// Dilarang menghapus code dibawah ini!!!
module.exports = {
  Thief,
  Trickster,
};
