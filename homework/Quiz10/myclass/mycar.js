class MyCar {
  model;
  horsePower;
  color;

  constructor(model, horsePower, color) {
    this.model = model;
    this.horsePower = horsePower;
    this.color = color;
  }
  start() {
    console.log(
      this.horsePower + "의" + this.color + this.model + "가 전진합니다."
    );
  }

  stop() {
    console.log(
      this.horsePower + "의" + this.color + this.model + "가 후진합니다."
    );
  }
}

const mycar = new MyCar("쏘나타", "100hp", "은색");
mycar.start();
mycar.stop();
