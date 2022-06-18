var canvas;
var backgroundImage;
var startImage;
var bg2Image;
var bg3Image;
var bg4Image;
var bg5Image;
var question;
var round1, round2, round3;
var heart3;
const Answer1 = "DONOR";
const Answer2 = "ARRAY";
const Answer3 = "HYPOCRITE";
var Answer;
var threeHearts, twoHearts, oneHeart;
var score = 0;
var lifee = 3;


function preload() {
  startImage = loadImage("./assets/startbg.jpg");
  backgroundImage = loadImage("./assets/background scrabble 2.jpg");
  bg2Image = loadImage("./assets/background scrabble.jpg");
  bg3Image = loadImage("./assets/background3.jpg");
  bg4Image = loadImage("./assets/background4.jpg");
  bg5Image = loadImage("./assets/background5.jpg");
  threeHearts = loadAnimation("./assets/life3.png");
  twoHearts = loadAnimation("./assets/life2.png");
  oneHeart = loadAnimation("./assets/life1.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
  form = new Form(); 
  form.display();

  welcome = new Welcome();
  welcome.display();

  round1 = new Round1();
  round1.display();

  round2 = new Round2();
  round3 = new Round3();

  heart3 = createSprite(150,70,40,40);
  heart3.scale = 0.4;
  heart3.addAnimation("threeHearts",threeHearts);
  heart3.addAnimation("twoHearts",twoHearts);
  heart3.addAnimation("oneHeart",oneHeart);
  heart3.changeAnimation("threeHearts");

 


 drawSprites();
 
}

function draw() {
 // background(backgroundImage);
 startbgImage(startbg);
  


  fill("pink");
  textSize(40);
  text("Score: " + score,600,50);

    if(score === 3){
    clear();
    background(bg3Image);
    fill("red");
    textSize(50);
    //text("THANK YOU FOR ANSWERING",500,200);
   }

  //  if(score === 1){
  //    background(bg4Image);
  //  }
  
 


  
  

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// function reveal(){
//   dblockRevealer.hide();
// }