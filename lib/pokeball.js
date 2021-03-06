class Pokeball {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = -50;
    this.y = ((Math.random() * 250) >>> 0);
    this.centerX = this.x + 12;
    this.centerY = this.y + 12;
    this.direction = "right";
  }

  movePokeball() {
    if (this.direction === "left") {
      this.x -= 3;
      this.centerX = this.x + 12;
    }

    if (this.direction === "right") {
      this.x += 3;
      this.centerX = this.x + 12;
    }

    if (this.x > 550 || this.x < -200) {
      let rand = (Math.random() * 2) >>> 0;
      this.direction = ["left", "right"][rand];

      if (this.direction === "left") {
        this.x = 400;
        this.y = this.y = ((Math.random() * 250) >>> 0);
        this.centerY = this.y + 12;
      } else {
        this.x = -50;
        this.y = this.y = ((Math.random() * 250) >>> 0);
        this.centerY = this.y + 12;
      }
    }

  }

  drawPokeball() {
    let img = new Image();
    img.src = "./images/pokeball.png";
    this.ctx.drawImage(img, this.x, this.y);
  }

}

export default Pokeball;
