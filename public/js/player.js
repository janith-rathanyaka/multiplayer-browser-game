class Player extends Phaser.Physics.Arcade.Sprite{

    constructor(scene,x,y){
        super(scene,x,y,"player");   

        scene.add.existing(this);

        scene.physics.add.existing(this);

        this.player_speed = 600;

        this.setInteractive();
       

        this.keyUP = scene.input.keyboard.addKey('W');
        this.keyDown = scene.input.keyboard.addKey('S');
        this.keyLeft = scene.input.keyboard.addKey('A');
        this.keyRight = scene.input.keyboard.addKey('D');

    } 

    update(){
        this.setVelocity(0,0);

        if(this.keyUP.isDown){
            this.setVelocityY(this.player_speed*-1);
        }else if(this.keyDown.isDown){
            this.setVelocityY(this.player_speed);
        }

        if(this.keyRight.isDown){
            this.setVelocityY(this.player_speed);
        }else if(this.keyLeft.isDown){
            this.setVelocityY(this.player_speed*-1);
        }


    }


}