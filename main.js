import { FirstLevel } from "./src/FirstLevel.js";

new Phaser.Game({
    scene: FirstLevel,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    }
});