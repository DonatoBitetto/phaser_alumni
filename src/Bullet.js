const { Image } = Phaser.Physics.Arcade;

export class Bullet extends Image{
    constructor(level,x,y,image){
        super(level,x,y,image);

        level.add.existing(this);
        level.bullets.add(this);
    }
}