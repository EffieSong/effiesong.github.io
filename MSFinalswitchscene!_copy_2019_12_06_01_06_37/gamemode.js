function GameMode(){
let range = {};//edge of sprites
let y_getTone;//position y of genereting tone
let offset = 30;
let dropSpeed = -2;
//for sound
let melody;
let pitch;
let pitchs = ['C4','D4','E4','G4'];
let pitchSyllable;
//for animation&gesture
let drops;
let handsign = "";
  
this.setup = function()
{
  range = {xLeft : 0.15*width, xRight : 0.85*width}
  y_getTone = 0.93*height;
  drops = new Group();
  //music
  melody = new Tone.AMSynth().toMaster();
  Tone.Transport.start();
  randomGenerateSprite();
  accompany2.setVolume(0.4);
  // accompany.loop();
}
this.draw = function()
{
  if(!accompany2.isPlaying()){
    accompany2.loop();
  }
  
drawUI();
  image(flippedVideo, 0.5*width, 0.5*height);
  drawSprites(drops);
  checkHandsign();
  generateTone(); 
  
   for(let i=0; i<drops.length; i++)
  {
     drops[i].setVelocity (0,dropSpeed);
    if(drops[i].position.y < - 60)
      drops[i].remove();
  }
  if(drops.length<1){
  randomGenerateSprite();
 }
}
  
function drawUI()
{
  image(bg,0.5*width,0.5*height);
  strokeWeight(20);
  stroke(10); 
  colorMode(HSB, 100);
  strokeWeight(6);
  stroke(5,80,100);
   ellipse(0.15*width,0.3*height,50);
  stroke(15,90,100);
  ellipse(0.15*width,0.45*height,50);
  stroke(25,80,90);
  ellipse(0.15*width,0.6*height,50);
  stroke(50,50,95);
  ellipse(0.15*width,0.75*height,50);
  //handsign instruction
  image(so,0.15*width,0.3*height,50,50);
  image(mi,0.15*width,0.45*height,50,50);
  image(re,0.15*width,0.6*height,50,50);
  image(doo,0.15*width,0.75*height,50,50);
 //text
 noStroke();
  textSize(18);
  fill(5,80,100);
  text('sol', 0.05*width, 0.3*height);
  fill(15,90,100);
  text('mi', 0.05*width, 0.45*height);
  fill(25,80,90);
  text('re', 0.05*width, 0.6*height);
  fill(50,50,95);
  text('do', 0.05*width, 0.75*height);
  // fill(80,40,100);
  // text('do', 0.85*width, 0.89*height);
  
  textAlign(CENTER);
  textSize(16);
  fill(255);
 // text('Level: 1', 0.5*width, 20);
  textSize(20);
  text('Key: Major', 0.5*width, 40);
  textSize(16);
  fill(255);
  text('Level: 1', 0.1*width, 40);
  textSize(16);
  fill(255);
  text('Score:', 0.85*width, 40);
  }
  
function randomGenerateSprite(){
  var newSprite = createSprite(random(range.xLeft,range.xRight), 620,10,10);
  newSprite.addImage('gray',starGray);
  newSprite.addImage('lightup',starLightup);
  newSprite.addAnimation('shining', 'assets/shine0001.png', 'assets/shine0002.png', 'assets/shine0001.png', 'assets/shine0002.png');
  drops.add(newSprite);
  pitch = random(pitchs);
  if(pitch == 'C4')pitchSyllable = 'Do';
  if(pitch == 'D4')pitchSyllable = 'Re';
  if(pitch == 'E4')pitchSyllable = 'Mi';
  if(pitch == 'G4')pitchSyllable = 'Sol';
  //tones.push(pitch);
}
  
let state = false;
let prestate = false;
function generateTone(){
  if(drops.length !=0){
 if(drops[drops.length-1].position.y<y_getTone){
  state = true;
 }else{state = false;}
 if(prestate != state && state == true){
  drops[drops.length-1].changeAnimation('shining');
  melody.triggerAttackRelease(pitch,'2n');
 }
    prestate = state;
   if(drops[drops.length-1].position.y<y_getTone-25){
   drops[drops.length-1].changeImage('gray');
 }
}
}


let gesture;
let _y;
function checkHandsign(){
 // lightup the star
  handsign = label;
  if(handsign == pitchSyllable){
    gesture = true;
     }else{gesture = false;}
 
    // drops[0].changeImage('lightup'); 
  if(drops.length != 0){
      if( drops[drops.length-1].position.y<y_getTone && gesture == true){
      drops[drops.length-1].changeImage('lightup');
      generate = true;
      randomGenerateSprite();
      gesture = false;
      }
}
   
  print(handsign+";"+pitchSyllable+";"+gesture+drops.length);     
}

function keyPressed(){
  if (keyCode === 49) {
    handsign = 'Do';
  } else if (keyCode === 50) {
    handsign = 'Re';
  }else if (keyCode === 51) {
    handsign = 'Mi';
  }else if (keyCode === 53) {
    handsign = 'Sol';
  }
}

}