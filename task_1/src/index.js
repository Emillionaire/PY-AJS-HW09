import Character from "./Character.js"
import Daemon from "./Daemon.js"
import Magician from "./Magician.js"

function start() {
    try {
        const Nicola = new Magician('Nicola');
        const Azizicra = new Daemon('Azizicra');

        console.log(Nicola.attackDamage(2));
        Nicola.stoned = true;
        
        console.log(Nicola.attackDamage(2));

    } catch (error) {
        console.log(error);
    }
}

start();