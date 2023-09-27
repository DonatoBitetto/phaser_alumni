import { Enemy } from "./Enemy.js";
import { Player } from "./Player.js";

export class FirstLevel extends Phaser.Scene{
    player;
    enemies;
    bullets;

    //serve per caricare gli asset(png) nel livello - primo ad essere eseguito
    preload(){
        this.load.image('player','assets/survivor.png');
        this.load.image('enemy','assets/zombie.png');
        this.load.image('bullet','assets/weapon_gun.png');
    }

    //eseguito subito dopo il preload
    //metodo utilizzato da Phaser per generare il livello
    create(){
        this.enemies = this.physics.add.group();
        this.bullets = this.physics.add.group();

        this.player = new Player(this,100,100,'player');

        /* this.cameras.main.startFollow(this.player) */

        this.time.addEvent({
            delay: 1000,
            loop: true,
            callback: ()=>{
                new Enemy(this,0,0,'enemy')
            }
        });

        
    }

    //eseguito in continuazione - game loop
    //gestisce la logica del gioco
    update(){
        this.enemies.children.iterate((enemy)=>{
            this.physics.moveToObject(enemy, this.player);
        });

        this.physics.collide(this.enemies,this.player, ()=>{
            this.scene.restart();
        });

        this.physics.collide(this.enemies,this.bullets, (enemy,bullet)=>{
            enemy.destroy();
            bullet.destroy();
        });
    }


}