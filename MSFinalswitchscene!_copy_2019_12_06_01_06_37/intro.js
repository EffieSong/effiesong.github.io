function Intro(){
this.draw = function(){
background(50,62,99);
 let ball = { x : width / 2, y : height / 2, size : height / 2 };
        
        textSize(24);
        textAlign(CENTER);
        fill("wight");
        text("My ear training", width / 2, 50);

        fill(255,200,200);
            noStroke();
  
            ellipse( ball.x, ball.y, ball.size + 10 );

        fill(39,69,133);
        textSize(12);
        text("Press key 1 or 2 to select\ntraining mode:", width / 2, height / 2 - 30);
        text("[1] - Practice mode", width / 2, height / 2 + 20);
        text("[2] - Game mode", width / 2, height / 2 + 50);

        fill("wight");
        if ( Math.floor(frameCount / 30) % 2 == 0 ) 
        {
            text("Select mode to start...", width / 2, height - 20);
        }

        // if ( dist( mouseX, mouseY, ball.x, ball.y ) < ball.size / 2  )
        // {
           
        // }

}

// this.keyPressed = function(){
// if ( key == '1' )
//         {
//             this.sceneManager.showScene( Animation1 );
//         }
// if ( key == '2' )
//         {
//             this.sceneManager.showScene( PracticeMode );
//         }

// }
}