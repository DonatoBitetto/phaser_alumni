import { Bullet } from "./Bullet.js";

//destructoring assignement
const { Image } = Phaser.Physics.Arcade;

/* const img = Phaser.Physics.Arcade.Image; */

export class Player extends Image {
  speed = 100;

  constructor(level, x, y, texture) {
    super(level, x, y, texture);

    level.add.existing(this);
    level.physics.world.enableBody(this);

    level.input.keyboard.on("keydown-W", () => {
      this.setVelocityY(-this.speed);
    });
    level.input.keyboard.on("keyup-W", () => {
      this.setVelocityY(0);
    });

    level.input.keyboard.on("keydown-S", () => {
      this.setVelocityY(this.speed);
    });
    level.input.keyboard.on("keyup-S", () => {
      this.setVelocityY(0);
    });

    level.input.keyboard.on("keydown-D", () => {
      this.setVelocityX(this.speed);
    });
    level.input.keyboard.on("keyup-D", () => {
      this.setVelocityX(0);
    });

    level.input.keyboard.on("keydown-A", () => {
      this.setVelocityX(-this.speed);
    });
    level.input.keyboard.on("keyup-A", () => {
      this.setVelocityX(0);
    });

    level.input.on("pointerdown", (pointer) => {
      let bullet = new Bullet(level, this.x, this.y, "bullet");
      level.physics.moveTo(bullet, pointer.worldX, pointer.worldY,500);
    });
  }
}
