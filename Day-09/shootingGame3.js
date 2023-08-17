class Player {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.power = 10;
    }
  
    hit(power) {
        this.health = Math.max(this.health - power, 0);
    }
  
    useItem(item) {
        this.health += item.health;
        this.power += item.power;
    }
  
    showStatus() {
        console.log(`Player ${this.name} (Health => ${this.health}, Power => ${this.power})`);
    }
}

class ShootingGame {
    constructor(player1, player2) {
        this.players = [player1, player2];
    }

    getRandomItem() {
        const health = Math.random() < 0.5 ? 0 : 10;
        const power = Math.random() < 0.5 ? 0 : 10;
        return { health, power };
    }
  
    start() {
        let currentPlayer = this.players[0];
        let otherPlayer = this.players[1];
  
        while (true) {
            this.players.forEach(player => player.showStatus());

            const items = this.players.map(player => this.getRandomItem());
            this.players.forEach((player, index) => player.useItem(items[index]));

            items.forEach((item, index) =>
                console.log(`${this.players[index].name} gets ${item.health > 0 ? "health" : "power"} item.`));

            otherPlayer.hit(currentPlayer.power);
            console.log(`${currentPlayer.name} shoots ${otherPlayer.name}.`);
            
            if (otherPlayer.health <= 0) {
                console.log(`${currentPlayer.name} wins!`);
                break;
            }
            
            // Swap players for the next turn
            [currentPlayer, otherPlayer] = [otherPlayer, currentPlayer];
        }
    }
}

// Example usage
const player1 = new Player("A");
const player2 = new Player("B");

const shootingGame = new ShootingGame(player1, player2);
shootingGame.start();
