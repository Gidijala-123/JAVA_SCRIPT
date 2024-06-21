class Race {
  constructor(playerName) {
    this.playerName = playerName;
  }
  startRace() {
    return `Race has started`;
  }
  endRace() {
    return `${this.playerName} is the winner`;
  }
}

class Car extends Race {
  constructor(playerName, nitro, speed) {
    super(playerName);
    this.nitro = nitro;
    this.speed = speed;
  }
  applyBreak() {
    this.speed = 0;
  }
  nitroBoost() {
    this.nitro -= 50;
    this.speed += 50;
  }
  accelerate() {
    this.nitro += 10;
    this.speed += 20;
  }
}

function main() {
  const playerName = "Bhargava";
  const nitro = JSON.parse(300);
  const speed = JSON.parse(50);

  const car1 = new Car(playerName, nitro, speed);

  console.log(car1.startRace());
  car1.nitroBoost();
  console.log(`Speed ${car1.speed}; Nitro ${car1.nitro}`);
  car1.accelerate();
  console.log(`Speed ${car1.speed}; Nitro ${car1.nitro}`);
  console.log(car1.endRace());
  car1.applyBreak();
  console.log(`Speed ${car1.speed}; Nitro ${car1.nitro}`);
}
main();
