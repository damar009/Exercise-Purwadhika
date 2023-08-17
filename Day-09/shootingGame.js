class Player {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.power = 10;
    }
  
    hit(power) {
        this.health -= power;
        if (this.health < 0) {
            this.health = 0;
        }
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
        this.player1 = player1;
        this.player2 = player2;
    }

    getRandomItem() {
        const health = Math.random() < 0.5 ? 0 : 10;
        const power = Math.random() < 0.5 ? 0 : 10;
        return { health, power };
    }
  
    start() {
        let currentPlayer = this.player1;
        let otherPlayer = this.player2;
  
        while (true) {
            currentPlayer.showStatus();
            otherPlayer.showStatus();
            
            const item1 = this.getRandomItem();
            const item2 = this.getRandomItem();
            
            currentPlayer.useItem(item1);
            otherPlayer.useItem(item2);
            
            console.log(`${currentPlayer.name} gets ${item1.health > 0 ? "health" : "power"} item.`);
            console.log(`${otherPlayer.name} gets ${item2.health > 0 ? "health" : "power"} item.`);
            
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
