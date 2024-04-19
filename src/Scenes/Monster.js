class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 400;
        this.bodyY = 350;
        
        // arms
        this.leftArmX = this.bodyX - 90;
        this.leftArmY = this.bodyY + 40;

        this.rightArmX = this.bodyX + 90;
        this.rightArmY = this.bodyY + 40;

        // legs
        this.leftLegX = this.bodyX - 60;
        this.leftLegY = this.bodyY + 130;

        this.rightLegX = this.bodyX + 60;
        this.rightLegY = this.bodyY + 130;

        // eyes
        this.leftEyeX = this.bodyX - 50;
        this.leftEyeY = this.bodyY + 20;

        this.rightEyeX = this.bodyX + 50;
        this.rightEyeY = this.bodyY + 20;

        // ears
        this.leftEarX = this.bodyX - 60;
        this.leftEarY = this.bodyY - 70;

        this.rightEarX = this.bodyX + 60;
        this.rightEarY = this.bodyY - 70;

        // antennas
        this.leftAntennaX = this.bodyX - 40;
        this.leftAntennaY = this.bodyY - 90;

        this.rightAntennaX = this.bodyX + 40;
        this.rightAntennaY = this.bodyY - 90;

        // mouth
        this.mouthX = this.bodyX;
        this.mouthY = this.bodyY + 55;

        // polling input: move
        this.aKey = null;
        this.dKey = null;

    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'


    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_blueD.png");

        // arms
        my.sprite.leftArm = this.add.sprite(this.leftArmX, this.leftArmY, "monsterParts", "arm_blueB.png");
        my.sprite.leftArm.flipX = true;
        my.sprite.rightArm = this.add.sprite(this.rightArmX, this.rightArmY, "monsterParts", "arm_blueB.png");

        // legs
        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.leftLegY, "monsterParts", "leg_blueD.png");
        my.sprite.leftLeg.flipX = true;
        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_blueD.png");
       
        // eyes
        my.sprite.leftEye = this.add.sprite(this.leftEyeX, this.leftEyeY, "monsterParts", "eye_psycho_dark.png");
        my.sprite.rightEye = this.add.sprite(this.rightEyeX, this.rightEyeY, "monsterParts", "eye_psycho_dark.png");

        // ears
        my.sprite.leftEar = this.add.sprite(this.leftEarX, this.leftEarY, "monsterParts", "detail_blue_ear.png");
        my.sprite.leftEar.flipX = true;
        my.sprite.rightEar = this.add.sprite(this.rightEarX, this.rightEarY, "monsterParts", "detail_blue_ear.png");

        // antennas
        my.sprite.leftAntenna = this.add.sprite(this.leftAntennaX, this.leftAntennaY, "monsterParts", "detail_blue_antenna_small.png");
        my.sprite.leftAntenna.flipX = true;
        my.sprite.rightAntenna = this.add.sprite(this.rightAntennaX, this.rightAntennaY, "monsterParts", "detail_blue_antenna_small.png");

        // mouth
        my.sprite.mouthClosed = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouth_closed_sad.png");
        my.sprite.smile = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthA.png");
        my.sprite.fangs = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthB.png");
        my.sprite.smile.visible = false;
        my.sprite.fangs.visible = false;

        // event input: smile
        this.input.keyboard.on('keydown-S', (event) => {
            my.sprite.smile.visible = true;
            my.sprite.mouthClosed.visible = false;
            my.sprite.fangs.visible = false;
        });

        // event input: fangs
        this.input.keyboard.on('keydown-F', (event) => {
            my.sprite.smile.visible = false;
            my.sprite.mouthClosed.visible = false;
            my.sprite.fangs.visible = true;
        });

        // polling input: move
        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        // polling input: move

        if(this.aKey.isDown){
            for(const property in my.sprite){
                my.sprite[property].x -= 5;
            }
        }
        else if(this.dKey.isDown){
            for(const property in my.sprite){
                my.sprite[property].x += 5;
            }
        }
    }

}