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
        this.currentPlayer = player1;
        this.otherPlayer = player2;
    }
  
    getRandomItem() {
        const health = Math.random() < 0.5 ? 0 : 10;
        const power = Math.random() < 0.5 ? 0 : 10;
        return { health, power };
    }
  
    playTurn() {
        this.currentPlayer.showStatus();
        this.otherPlayer.showStatus();
  
        const item1 = this.getRandomItem();
        const item2 = this.getRandomItem();
  
        this.currentPlayer.useItem(item1);
        this.otherPlayer.useItem(item2);
  
        console.log(`${this.currentPlayer.name} gets ${item1.health > 0 ? "health" : "power"} item.`);
        console.log(`${this.otherPlayer.name} gets ${item2.health > 0 ? "health" : "power"} item.`);
  
        this.otherPlayer.hit(this.currentPlayer.power);
  
        console.log(`${this.currentPlayer.name} shoots ${this.otherPlayer.name}.`);
  
        if (this.otherPlayer.health <= 0) {
            console.log(`${this.currentPlayer.name} wins!`);
            return;
        }
  
        // Swap players for the next turn
        [this.currentPlayer, this.otherPlayer] = [this.otherPlayer, this.currentPlayer];
  
        // Play the next turn
        this.playTurn();
    }
  
    start() {
        this.playTurn();
    }
}
  
// Example usage
const player1 = new Player("A");
const player2 = new Player("B");
  
const shootingGame = new ShootingGame(player1, player2);
shootingGame.start();