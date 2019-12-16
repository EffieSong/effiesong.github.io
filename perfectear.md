My first design statement is : design a playful learning tool for music beginners to learn more and train their musicality. First, I want to continue one of my 7 in 7 prototypes: Beauty of chords. In this prototypes, each triangle represent a chord. Users can sort the triangles into different sequences to create their chord progression. I think this prototype is cool but later I found that the definition of it was not very clear. Like what kind of music beginner it target to? What kind of experience I want? Cause learning and training are two different kinds of experences. So I want to make my statement more clear

My second desgin comes to: design a playful ear training tool for musicians to train their musicality. 
Musicality means playing by ears, that means you can hear the notes you need to play in your head. And it is an important and desirable skill for all musicians. When a musician have a good musicality, he can think in music, hear patterns, recognize them, remember them, and perhaps manipulate them. So it is very important for all musicians.


#### Inspiration
What inspired me most is the solfege hand signs (also called the Kodaly hand signs or the Curwen hand signs)
![](https://github.com/EffieSong/effiesong.github.io/raw/master/finalimg-folder/solfegehandsign.jpg)
This may seem funny, but there’s a real purpose to them. it provide a visual aid during singing exercises. The distance between them is also a good example of the size of the interval they represent. So I thought maybe I can use the gesture as an input to do something interesting.


### Machine learning technique
I used Teachable Machine, which is from Google, to train my computer to recognise gestures so that hand signs could be used as an input. At first the recognition did not work well because the data set was not big enough. The pictures I used as date were just my hand with my face as the background, so it did not work well when someone else was using it. Then I expanded my date set by adding pictures with white paper as a background and pictures that were tool from different camera angle. It was proved to work better than before.

### Outcome
<iframe width="560" height="315" src="https://www.youtube.com/embed/VvfSzsO4SBg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
Perfect Ear has two modes: the practice mode and the game mode. In the practice mode, users are supposed to learn and memorise the hand signs that corresponding to each pitch. By following the instruction pictures bellow, users gesture in front of the camera to trigger a tone and a visual effect at the same time. In the game mode, users are supposed to listen to a tone first. Then, recognizing what pitch of it only by ears, users respond with the correct hand sign in front of the camera to light up the star. The computer will tell if they do it right or wrong. 


### What's next...
I would like to add higher level in the future. At this stage, it may seems that this project is only for beginners, since it only provides training experience for major pentatonic scale. But it can be more professional when it comes to higher level. There are many other scale and modes in music that people can train with.
![](https://github.com/EffieSong/effiesong.github.io/raw/master/finalimg-folder/modes.jpg)
And I will also keep working on the UI, which now seems to target more on chirldren.
