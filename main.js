
//import './dist/rexuiplugin.min.js'
const COLOR_PRIMARY = 0x4e342e;
const COLOR_LIGHT = 0x7b5e57;
const COLOR_DARK = 0x260e04;

var config = {
       
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    physics: {
        default: 'arcade',
        arcade: {
            gravity: { z: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }

    
};

var game = new Phaser.Game(config);

//initialise global variables
var player;
var obstacles;
var cursors;

var yLimit;
var xLimit;

let turn=0;


function preload ()
{   this.load.scenePlugin({
    key: 'rexuiplugin',
    url: 'rexuiplugin.min.js',
    sceneKey: 'rexUI'
})
    this.load.image('sky', 'assets/octagon.jpg');
    this.load.image('circle', 'assets/circle.png');
    this.load.image('p2', 'assets/player2.png');
    this.load.image('grey_tile', 'assets/grey_tile.png');   
}

function create ()
{
    var items = [
        {
            name: 'AA',
            children: [
                {
                    name: 'AA-0',
                    children: [
                        { name: 'AA-00' },
                        { name: 'AA-01' },
                        { name: 'AA-02' },
                    ]
                },
                {
                    name: 'AA-1',
                    children: [
                        { name: 'AA-10' },
                        { name: 'AA-11' },
                        { name: 'AA-12' },
                    ]
                },
                {
                    name: 'AA-2',
                    children: [
                        { name: 'AA-20' },
                        { name: 'AA-21' },
                        { name: 'AA-22' },
                    ]
                },
            ]
        },
        {
            name: 'BB',
            children: [
                { name: 'BB-0' },
                { name: 'BB-1' },
                { name: 'BB-2' },
            ]
        },
        {
            name: 'CC',
            children: [
                { name: 'CC-0' },
                { name: 'CC-1' },
                { name: 'CC-2' },
            ]
        },
    ];

 var scene=this,
    menu=undefined;
    this.print = this.add.text(0, 0 ,' ');
    this.input.on('pointerdown', function(pointer){
        if (menu===undefined)
        {
            menu=createMenu(scene,pointer.x,pointer.y,items,function(button){
                scene.print.text+='Click' +button.text+'\n';
            });}
        else if (!menu.isInTouching(pointer)){
            menu.collapse();
            menu=undefined;
            scene.print.text='';
        }    
        
    },this);

 background = this.add.image(0, 0, 'sky');
 item1 = this.add.image(380, 320, 'grey_tile');
 item2 = this.add.image(310, 320, 'grey_tile');
 item3 = this.add.image(450, 320, 'grey_tile');
 item4 = this.add.image(380, 250, 'grey_tile');
 item5 = this.add.image(310, 250, 'grey_tile');
 item6 = this.add.image(450, 250, 'grey_tile');
 item8 = this.add.image(380, 390, 'grey_tile');
 item9 = this.add.image(310, 390, 'grey_tile');
 item10 = this.add.image(450, 390, 'grey_tile');
 background.x = background.displayWidth / 2;
 background.y = background.displayHeight/1.5;
  xLimit = background.displayWidth; //the player cannot go beyond these x and
 yLimit = background.displayHeight;
    //var particles = this.add.particles('circle');
 player = this.physics.add.sprite(380, 320, 'circle');
 player2 = this.physics.add.sprite(380, 320, 'p2') //create the player sprite
    player.setScale(0.4);
    player2.setScale(0.4);
   // var emitter = particles.createEmitter({
      //  speed: 100,
      //  scale: { start: 1, end: 0 },
       // blendMode: 'ADD'
   // });    
   item1.setInteractive().on('pointerover', function() {item1.setTint(0x39FF14)});
   item1.setInteractive().on('pointerout', function() {item1.setTint()});
   W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
   A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
   S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
   D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
   cursors = this.input.keyboard.createCursorKeys(); 
   // turn=0;
   // isRightDown = cursors.right.isDown;  

   this.input.keyboard.on('keydown-M', function (event) {
     player.angle += 45;
                                                        }); 
   this.input.keyboard.on('keydown-Q', function (event) {
     player2.angle += 45;
                                                        });
}
function update ()
{
    if (turn%2==0){
if (Phaser.Input.Keyboard.JustDown(cursors.left) && player.x <= xLimit) { 
player.body.x -= 50;
turn++;

                                                         }
else if (Phaser.Input.Keyboard.JustDown(cursors.right) && player.x <= xLimit) {
player.body.x += 50;
turn++;                                                                       
                                                                  }
//else {player.setVelocityX(0);  }

if (Phaser.Input.Keyboard.JustDown(cursors.up) && player.y >=0) {                                                                                
player.body.y -= 50;
turn++;
}
else  if (Phaser.Input.Keyboard.JustDown(cursors.down) && player.y <=yLimit) {                                                                           
player.body.y += 50;
turn++;
}                                                                                                 
else {player.setVelocityY(0);                                                            }
}
if(turn%2!=0){
if (Phaser.Input.Keyboard.JustDown(A) && player2.x <= xLimit) { 
player2.body.x -= 50;
turn++;
                                                         }
else if (Phaser.Input.Keyboard.JustDown(D) && player2.x <= xLimit) {
player2.body.x += 50;
turn++;                                                                       
                                                                  }
else {player2.setVelocityX(0);  }

if (Phaser.Input.Keyboard.JustDown(W) && player2.y >=0) {                                                                                
player2.body.y -= 50;
turn++;
}
else  if (Phaser.Input.Keyboard.JustDown(S) && player2.y <=yLimit) {                                                                           
player2.body.y += 50;
turn++;
}                                                                                                 
else {
player2.setVelocityY(0);                                                            
}
}
if (Math.hypot(player.x, player.y) < 100)
if(Phaser.Math.Distance.Chebyshev(player.x,player.y,item1.x,item1.y)<100)
{item1.setTint(0x39FF14);}
else {item1.setTint();}


 createMenu = function(scene,x, y, items, onClick){
    var exapndOrientation = 'y';
    var easeOrientation = 'y';

    var menu= scene.rexUI.add.menu({
        x:x,
        y:y,
        orientation:exapndOrientation,
        items: items,
        createButtonCallback: function(item, i){
            return scene.rexUI.add.label({
                background: scene.rexUI.add.roundRectangle(0,0,2,2,0,COLOR_PRIMARY),
                text: scene.add.text(0,0,item.name, {
                    fontSize: '20px'
                }),
                icon: scene.rexUI.add.roundRectangle(0,0,0,0,10,COLOR_DARK),
                space:{
                    left:10,
                    right:10,
                    top:10,
                    bottom:10,
                    icon:10
                }
            })
        },
        easeIn: {
            duration: 500,
            orientation: easeOrientation
        },

        // easeOut: 100,
        easeOut: {
            duration: 100,
            orientation: easeOrientation
        }

        
    });
    menu
        .on('button.over', function (button) {
            button.getElement('background').setStrokeStyle(1, 0xffffff);
        })
        .on('button.out', function (button) {
            button.getElement('background').setStrokeStyle();
        })
        .on('button.click', function (button) {
            onClick(button);
        })
        .on('popup.complete', function (subMenu) {
            console.log('popup.complete')
        })
        .on('scaledown.complete', function () {
            console.log('scaledown.complete')
        })  

    return menu;
}

}