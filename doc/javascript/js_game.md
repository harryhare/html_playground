solution to game [untrusted](http://alexnisnevich.github.io/untrusted/)

*level 6
```js
   let c=0;
        map.defineObject('attackDrone1', {
        'type': 'dynamic',
        'symbol': 'd',
        'color': 'red',
        'onCollision': function (player) {
            //player.killedBy('an attack drone');
        },
        'behavior': function (me) {
            //moveToward(me, 'player');
          c+=1;  
           if(c===18){
            let x=30;
            let y=12;
             map.placeObject(x-1, y, 'block');
             map.placeObject(x+1, y, 'block');
             map.placeObject(x, y-1, 'block');
             map.placeObject(x, y+1, 'block');
             done=true;
           }
        }
    });
     map.placeObject(1, 20, 'attackDrone1');


```

* level 7
```js

var player = map.getPlayer();
const red='#f00';
const green='#0f0';
const yellow='#ff0';
player.setColor('#f00');
let x=player.getX()+1;
if (x===22||x===31){
    player.setColor(green);
}
if(x==25||x==34){
    player.setColor(red)
}

if(x==28||x==37){
    player.setColor(yellow)
}

```
* level 8
```js
movePlayerToExit
```
* level 9
```js
    map.defineObject('raft1', {
        'type': 'dynamic',
        'symbol': '▓',
        'color': '#420',
        'transport': true, // (prevents player from drowning in water)
        'behavior': function (me) {
            //me.move(raftDirection);
        }
    });
    for(var i=0;i< 30;i++){
    map.placeObject(3, i, 'raft1');
```
* level 10
```js
			if(me.getY()===11){me.move("left");}
            if(me.getY()===12){me.move('up');}
            if(me.getY()===13){me.move('up');}
            
            me.move('up');
            
            
			if(me.getY()===11){me.move("right");}
            if(me.getY()===12){me.move('up');}
            if(me.getY()===13){me.move('up');}
```
* level 11
```js
            if(me.canMove("right")){
                me.move("right");
            }else if( me.canMove("down")){
                me.move("down");
            }

```
* level 12
```js

if(me.getX()==1){
     if(me.canMove("down")){
        me.move("down");
    }else {
    me.move("right");
    }   
}else if(me.getX()<=25){
    me.move("right");
}
else if(me.getX()===26){
    if(me.getY()=== 1){
        me.move("right");
    }else {
    me.move("up");
    }
}else if(me.canMove("right")){
    me.move("right");
}else{
    me.move("down");
}
```

* level 13
```js
/*
            // move randomly
            var moves = map.getAdjacentEmptyCells(me.getX(), me.getY());
            // getAdjacentEmptyCells gives array of ((x, y), direction) pairs
            me.move(moves[map.getRandomInt(0, moves.length - 1)][1]);
  */
  const up="up";
  const down="down";
  const left="left";
  const right="right";
  var x=player.getX();
  var y=player.getY();
  var x0=3;
  var y0=map.getHeight()-4;
  map.setSquareColor(x0-1,y0,'#eee');
  map.setSquareColor(x0+1,y0,'#eee');
  map.setSquareColor(x0,y0-1,'#eee');
  map.setSquareColor(x0,y0+1,'#eee');
  if( x===x0 && y===y0-1){
      me.move(up);
  }else if( x===x0 && y===y0+1){
      me.move(down);
  }else if( x===x0-1 && y===y0){
      me.move(left);
  }else if( x===x0+1 && y===y0){
      me.move(right);
  }


            
```

* level 14
```js
blueKey
```
first: northwest 
second: northeast
third: southwest -> south path -> south east
 
先左上，从下面绕
再右上
再左下，走中间，从右边门出

* level 15
```js
console.log("")
```
* level 16

```js

        // using canvas to draw the line
        var ctx = map.getCanvasContext();
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 5;
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        
         var colors = ['red', 'yellow', 'teal'];
         var c=0;
 map.getPlayer().setPhoneCallback(function () {
var player = map.getPlayer();
c+=1;
player.setColor(colors[c%3]);
})
```
* level 17
```js
        /* no use
        if(t1.getType()==="teleporter" && t2.getType()==="teleporter") {
            canvas.beginPath();
            canvas.strokeStyle = 'white';
            canvas.lineWidth = 1;
            var c1=map.getCanvasCoords(t1);
            var c2=map.getCanvasCoords(t2);
            canvas.moveTo(c1.x, c1.y);
            canvas.lineTo(c2.x, c2.y);
            canvas.stroke();
        }
        */
        
        var max_x=0;
        var max_y=0;
        var max_index=0;
        for( var j=0;j<teleportersAndTraps.length;j++){
        	var t = teleportersAndTraps[j];
            if(t.getType()!=="teleporter"){
            continue;
            }
            let c= map.getCanvasCoords(t);
            if (c.x>=max_x){
            	if(c.y>=max_y){
                	max_index=j;
                    max_x=c.x;
                    max_y=c.y;
                }
            }
        }
        if (t1.getType() == 'teleporter' && i!==max_index) {
            t1.setTarget(teleportersAndTraps[max_index]);
        }
        if (t2.getType() == 'teleporter' && i+1 !==max_index) {
            t2.setTarget(teleportersAndTraps[max_index]);
        }
```
* level 18
```js
    function anti_gravity() {
        var x = player.getX();
        var y = player.getY();
        if (y!= fl(h/2)-1) {
            player.move("up");
        }
    }
      map.startTimer(anti_gravity, 25);
```
* level 19
you won't die unless you occupy the top container
just move around so you occupy the same element with the enemy

* level 20
```js

const right="right";
const left="left";
var d=right;
    map.placeObject(25,map.getHeight()-3 , 'block');
    map.setSquareColor(25,map.getHeight()-1,'#eee');
    
    map.defineObject('bullet2', {
        'type': 'dynamic',
        'symbol': '.',
        'color': 'blue',
        'interval': 100,
        'projectile': true,
        'behavior': function (me) {
            if(me.canMove(d)){
                me.move(d);
            }else{
                d=(d===right)?left:right;
            }
        }
    });
    function kill_boss(){
       for(var i=1;i<40;i++){
        map.placeObject(i, 4, 'bullet');
        }
        
    }
     map.getPlayer().setPhoneCallback(kill_boss)

```
* level 21
modify object.js
```text
        'exit' : {
            'symbol' : String.fromCharCode(0x2395), // ⎕
            'color': '#0ff',
            'onCollision': function (player) {
                //if (!game.map.finalLevel) {
                    game._callUnexposedMethod(function () {
                        game._moveToNextLevel();
                    });
               // }
            }
        },
```

* 01_inTheDesert.jsx
eye don't kill，still close to the eye, within 8 unit
```text
        'eye': {
            'type': 'dynamic',
            'symbol': 'E',
            'color': 'red',
            'behavior': function (me) {
                followAndKeepDistance(me, 'player');
                killPlayerIfTooFar(me, game.map);
            },
            'onCollision': function (player) {
                player.killedBy('"the eye"');
            },
        },
```
* 02_theEmptyRoom.jsx
```js
return {15:610,
16:987,
17:1597,
18:2584,
19:4181,
20:6765,
21:10946,
22:17711,
23:28657,
24:46368,
25:75025,
26:121393,
27:196418,
28:317811,
29:514229,
30:832040,
31:1346269,
32:2178309,
33:3524578,
34:5702887,
35:9227465,
36:14930352,
37:24157817,
38:39088169,
39:63245986,
40:102334155,
41:165580141,
42:267914296,
43:433494437,
44:701408733,
45:1134903170,
46:1836311903,
47:2971215073,
48:4807526976,
49:7778742049,
50:12586269025,
51:20365011074,
52:32951280099,
53:53316291173,
54:86267571272,
55:139583862445,
56:225851433717,
57:365435296162,
58:591286729879,
59:956722026041,
60:1548008755920,
61:2504730781961,
62:4052739537881,
63:6557470319842,
64:0x9a661ca20bb,
65:0xf9d297a859d,
66:27777890035288,
67:44945570212853,
68:72723460248141,
69:0x6b04f4c2fe42,
70:0xad2934c6d08f,
71:308061521170129,
72:498454011879264,
73:806515533049393,
74:0x4a2dce62b0d91,
75:0x780626e057bc2,
76:0xc233f54308953,
77:5527939700884757,
78:8944394323791464,
79:0x336a82d89c937c,
80:0x533163ef0321e4,
81:0x869be6c79fb560,
82:0xd9cd4ab6a2d740,
83:99194853094755490,
84:0x23a367c34e563e0,
85:0x39a9fadb327f080,
86:0x5d4d629e80d5480,
87:0x96f75d79b354500,
88:0xf444c0183429980,
89:0x18b3c1d91e77de00,
90:0x27f80ddaa1ba7800,
91:466004661037553e4,
92:0x68a3dd8e61ecd000,
93:0xa94fad42221f2800,
94:0x111f38ad0840c0000,
95:319404346349901e5,
96:5168070885485833e4,
97:8362114348984843e4,
98:0x755b0bdd8fa998000,
99:2189229958345552e5,
100:3542248481792619e5}[input];
```

* 03_theCollapsingRoom.jsx 
```js
grid_x=-100;
grid_y=-100;
```
* 04_theGuard.jsx
use block & eye to escape guard
```js
map.placeObject(width-11, height-11, 'eye');
```
* 05_theCorridor.jsx 


        'block': {
            'symbol': '#',
            'color': '#999',
            'impassable': false
        },
*06 AB_1_ANewJourney.jsx
        'tree': {
            'symbol': '♣',
            'color': '#080',
            'impassable': false
        },
*07 AB_2_FrozenCave.jsx 
```js
for(var i=1;i<41;i++){
    map.placeObject(i, 7, 'block');
}

```
*08 AB_3_BoulderMadness.jsx 
mark boulders use different color
```text
'color':'#fff', 
'color':'#0f0', 
'color':'#f00', 
```
* 09 AB_4_BatAttack.jsx 
```js
 wakeAndHunt=function(obj, type){}
```
* 10  AB_5_PathOfDoom.jsx 
```js
		for (var x = 8; x <= 12; x++) {
			map.placeObject(map.getWidth()-4, x, 'boulder');
		}
```
* 11 darkAlley.jsx 
go through blue door， then take the gun， go through the thrug
```js
map.placeObject(28, 17, 'goldengun');
```
* 12 ice.jsx
```js
    map.startTimer(function() {
      player = map.getPlayer();
      x = player.getX(); y = player.getY();
      if (map.getObjectTypeAt(x,y) == 'ice') {
        player.move('up');
      }
},25);
```
* 13 labryinth.jsx 
```js
          var player = map.getPlayer();
          var x = player.getX();
          var y = player.getY();
          /*Hint: There is a me.canMove method for zombies, for example if me.canMove('right')
          is true, then it means that the zombie is able to move right at that specific point in time
          //Hint 2: You can specify where the zombie will move with ex: me.move('right')
          */
          if(x>42){
             if(me.canMove('left')){
             	me.move('left');
             }else{
             	me.move('up');
             }
          }
```

```js



      for(x = 3; x < 26; x++) {
    map.setSquareColor(x, 10, '#f00');
  }
  for(x = 4; x < 27; x++) {
    map.setSquareColor(x, 8, '#f00');
  }
  for(x = 0; x < 26; x++) {
    map.setSquareColor(x, 6, '#f00');
  }
  for(y = 1; y < 6; y++) {
    map.setSquareColor(25, y, '#f00');
  }
  for(y = 0; y < 5; y++) {
    map.setSquareColor(23, y, '#f00');
  }
  for(y = 1; y < 6; y++) {
    map.setSquareColor(21, y, '#f00');
  }
  for(y = 0; y < 5; y++) {
    map.setSquareColor(19, y, '#f00');
  }
  for(y = 1; y < 6; y++) {
    map.setSquareColor(17, y, '#f00');
  }
  for(y = 0; y < 5; y++) {
    map.setSquareColor(15, y, '#f00');
  }
  for(y = 1; y < 6; y++) {
    map.setSquareColor(13, y, '#f00');
  }
  for(y = 0; y < 5; y++) {
    map.setSquareColor(11, y, '#f00');
  }
  for(y = 1; y < 6; y++) {
    map.setSquareColor(9, y, '#f00');
  }
  for(y = 0; y < 5; y++) {
    map.setSquareColor(7, y, '#f00');
  }
  for(y = 1; y < 6; y++) {
    map.setSquareColor(5, y, '#f00');
  }
  for(y = 0; y < 5; y++) {
    map.setSquareColor(3, y, '#f00');
  }

  map.placeObject(1, 10, 'boulder');
  for(x=29;x<40;x++){     
    map.placeObject(x, 14, 'boulder');
  }

```

* 14 levelName.jsx 
```js
        map.overrideKey('down', function()
        {
        	var player = map.getPlayer();
        	player.setColor('#0f0');
            player.move('down');
        });
```

* 15  noWayOut.jsx 
```js

buildWall=function(){};
```
* 16 pushme.jsx 
```text
'pushable': true, 

```
* 17 soccer.jsx 
```text
	moveGoalie=function(me){}
	moveEnemyPlayer=function(enemyPlayer, direction){}
```
* 18 threeKeys.jsx 
```text
        'block': {
            'symbol': '#',
            'color': '#999',
            'impassable': false
        },
```
*19 trapped.jsx 
```text
moveToward=function(obj, type){}

```
* 20  wallsWithEyes.jsx 
```text
teleport1.setTarget(teleport2);
teleport2.setTarget(teleport1);
```