import Character from './Character.js';

export default class Daemon extends Character {
    constructor(name) {
      const type = 'Daemon';
      const health = 100;
      const level = 1;
      const attack = 10;
      const defence = 40;
  
      super(name, type, health, level, attack, defence);
    }
  }