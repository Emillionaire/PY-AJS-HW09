export default class Character {
    constructor(name, type, health, level, attack, defence) {
      // const characterTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
  
      if (name.length < 2 || name.length > 10) {
        throw new Error('Parameter "name" should be in range: 2-10 symbol');
      }
      // if (characterTypes.indexOf(type) === -1) {
      //   throw new Error(`Parameter "type" should be one of: ${characterTypes}`);
      // }
  
      this.name = name;
      this.type = type;
      this.health = health;
      this.level = level;
      this.attack = attack;
      this.defence = defence;

      this.stoned = false;
    }

    get stoned() {
      return this.stoned;
    }

    set stoned(param) {
      this.stoned = param;
    }

    attackDamage(range) {
      let attackValue = this.attack * (110 - 10 * range) / 100
      return this.stoned ? attackValue - Math.log2(range) * 5 : attackValue
    }
  
    levelUp() {
      if (this.health == 0) {
        throw new Error('Character dead, level not encreased')
      }
  
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    }
  
    damage(points) {
      this.health -= points * (1 - this.defence / 100)
      if (this.health < 0) {
        this.health = 0;
      }
    }
  }
  