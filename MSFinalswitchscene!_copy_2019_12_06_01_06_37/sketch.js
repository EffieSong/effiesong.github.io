//screenmanager
let mgr;
//ml5
let video;
let flippedVideo;
let label = "";
let classifier;
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/bbP6GBz9/';
//
function preload()
{
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
  doo = loadImage('assets/do.png');
  re = loadImage('assets/re.png');
  mi = loadImage('assets/mi.png');
  so = loadImage('assets/so.png');
  la = loadImage('assets/la.png');
  starGray = loadImage('assets/starGray2.png');
  starLightup = loadImage('assets/starLightup.png');
  bg = loadImage('assets/bg2.jpg');
  accompany1 = loadSound('assets/musicaccomp.mp3');
  accompany2 = loadSound('assets/musicaccomp.mp3');
}
function setup()
{
  createCanvas(600, 600);
  imageMode(CENTER);
    mgr = new SceneManager();
    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene ( Intro );
    mgr.addScene ( PracticeMode );
    mgr.addScene ( GameMode );
    mgr.showScene( Intro );
  //ml5
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();
  flippedVideo = ml5.flipImage(video);
  classifyVideo();
}

function draw()
{
    mgr.draw();
}
function mousePressed()
{
    mgr.handleEvent("mousePressed");
}
function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( PracticeMode );
         if(accompany2.isPlaying()){
               accompany2.stop();
               }
            break;
        case '2':
            if(accompany1.isPlaying()){
               accompany1.stop();
               }
      //  clearInterval(intervalDrop);
            mgr.showScene( GameMode );
            break;
        case '0':
            accompany1.stop();
            accompany2.stop();
            mgr.showScene( Intro );
            break;
    }

    // ... then dispatch via the SceneManager.
    mgr.handleEvent("keyPressed");
}


function classifyVideo() 
  {
    flippedVideo = ml5.flipImage(video);
    classifier.classify(flippedVideo, gotResult);
  }
function gotResult(error, results) 
  {
    // If there is an error
    if (error) {
      console.error(error);
      return;
    }
    // The results are in an array ordered by confidence.
    // console.log(results[0]);
    label = results[0].label;
    // Classifiy again!
    classifyVideo();
   // print(this.label);
   
  }
