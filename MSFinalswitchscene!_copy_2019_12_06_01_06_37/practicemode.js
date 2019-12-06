function PracticeMode(){
let ptx = {};
let yboom;//position y of animation
let offset = 30;
let dropSpeed = 2;
let dropInterval = 1700;//time interval for generate drops
//for sound
let melody;
//for animation
let drops;
//for ml5
// let video;
// let flippedVideo;
// let label = "";
  

  
this.setup = function()
{
  imageMode(CENTER);
  ptx = { x1 : 0.15*width, x2 : 0.325*width, x3 : 0.5*width, x4 : 0.657*width, x5 : 0.85*width };
  yboom = 0.8*height;
  drops = new Group();
  intervalDrop = setInterval(randomGenerateSprite, dropInterval);
  //music
  melody = new  Tone.AMSynth().toMaster();
  Tone.Transport.start();
   accompany1.setVolume(0.4);
  // accompany.loop();
  //ml5
  // video = createCapture(VIDEO);
  // video.size(320, 240);
  // video.hide();
  // flippedVideo = ml5.flipImage(video)
  // classifyVideo();
}

this.draw = function()
{
  
  if(!accompany1.isPlaying()){
    accompany1.loop();
  }
  
  drawUI();
   for(var i=0; i<drops.length; i++)
  {
     drops[i].setVelocity (0,dropSpeed);

    if(drops[i].position.y > height + 100)
      drops[i].remove();
  }
  image(flippedVideo,0.45*width, 0.5*height); 
  drawSprites(drops);
  checkHandsign();
  print(label);
  
}

function drawUI()
{
  background(90,110,180);
  strokeWeight(20);
  stroke(10); 
  colorMode(HSB, 100);
  strokeWeight(6);
  stroke(5,80,100);
  ellipse(ptx.x1,yboom,60);
  stroke(15,90,100);
  ellipse(ptx.x2,yboom,60);
  stroke(25,80,90);
  ellipse(ptx.x3,yboom,60);
  stroke(50,50,95);
  ellipse(ptx.x4,yboom,60);
  stroke(80,40,100);
  ellipse(ptx.x5,yboom,60);
  //handsign instruction
  image(doo,ptx.x1,yboom,60,60);
  image(re,ptx.x2,yboom,60,60);
  image(mi,ptx.x3,yboom,60,60);
  image(so,ptx.x4,yboom,60,60);
  image(la,ptx.x5,yboom,60,60);
 //text
  noStroke();
  textAlign(CENTER);
  textSize(16);
  fill(255);
  text('Level: 1', 0.5*width, 20);
  textSize(20);
  text('Key: Major', 0.5*width, 50);
  textSize(16);
  fill(255);
//syllable
  textSize(18);
  fill(5,80,100);
  text('do', ptx.x1, 0.89*height);
  fill(15,90,100);
  text('re', ptx.x2, 0.89*height);
  fill(25,80,90);
  text('mi', ptx.x3, 0.89*height);
  fill(50,50,95);
  text('sol', ptx.x4, 0.89*height);
  fill(80,40,100);
  text('la', ptx.x5, 0.89*height);
  }
  
function randomGenerateSprite()
{
  let newDrop = createSprite(random([ptx.x1,ptx.x2,ptx.x3,ptx.x4,ptx.x5]), -130,10,10);
  newDrop.addAnimation('floating','assets/asterisk_explode0008.png','assets/asterisk_explode0009.png','assets/asterisk_explode0010.png', 'assets/asterisk_explode0011.png');
    newDrop.addAnimation('exploding','assets/asterisk_explode0001.png','assets/asterisk_explode0002.png','assets/asterisk_explode0003.png','assets/asterisk_explode0004.png','assets/asterisk_explode0005.png','assets/asterisk_explode0006.png','assets/asterisk_explode0007.png');
  drops.add(newDrop);
}

function checkHandsign()
{
 //change animation 
  for(let i = 0;i<drops.length; i++ ){
 if(label =="Do" && drops[i].position.x == ptx.x1 && drops[i].position.y>yboom-offset && drops[i].position.y<yboom+offset ){
    drops[i].boomState = true;
    melody.triggerAttackRelease('C4','5n');
   }else if(label =="Re" && drops[i].position.x == ptx.x2 && drops[i].position.y>yboom-offset && drops[i].position.y<yboom+offset ){
    drops[i].boomState = true;
    melody.triggerAttackRelease('D4','5n');
   }else if(label =="Mi" && drops[i].position.x == ptx.x3 && drops[i].position.y>yboom-offset && drops[i].position.y<yboom+offset ){
    drops[i].boomState = true;
    melody.triggerAttackRelease('E4','5n');
   }else if(label =="Sol" && drops[i].position.x == ptx.x4 && drops[i].position.y>yboom-offset && drops[i].position.y<yboom+offset ){
    drops[i].boomState = true;
    melody.triggerAttackRelease('G4','5n');
   }else if(label =="La" && drops[i].position.x == ptx.x5 && drops[i].position.y>yboom-offset && drops[i].position.y<yboom+offset ){
    drops[i].boomState = true;
    melody.triggerAttackRelease('A4','5n');
   }else{
     drops[i].boomState = false;
        } 
    
  if(drops[i].boomState == true && drops[i].tempState == true){
     drops[i].tempState = false;
     drops[i].changeAnimation('exploding');
     drops[i].life = 15;
  }
  if(drops[i].boomState == false){drops[i].tempState = true;} 
  }
}

}