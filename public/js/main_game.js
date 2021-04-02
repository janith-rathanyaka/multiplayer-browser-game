var window_height = window.innerHeight;
var window_width = window.innerWidth;

var config = {
    type: Phaser.AUTO,
    width: window_width,
    height: window_height,
    backgroundColor: '#000000',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 0,
            },
            fps: 60,
        }
    },

    scene: {
        preload: preload,
        create: create,
        update: update,
    }
}

// holds a game instance
var game = new Phaser.Game(config);

var player;
var player_init = false;

function preload(){
    this.load.image('player', 'public/img/player.png');
    this.load.image('bullet', 'public/img/bullet.png');
    this.load.image('enemy', 'public/img/enemy.png');
}

function create(){

}

function update(){
    if (this.player_init == true) {
        this.player.update();
    }
}
