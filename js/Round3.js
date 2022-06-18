class Round3 {
    constructor() {
  
      this.question = createElement("h3");
      this.input = createInput("").attribute("placeholder","Enter Your Answer");
      this.button = createButton("Submit");
      this.message = createElement("h4");
      this.message1 = createElement("h4");
      this.message2 = createElement("h4");
      this.card1 = createElement("h1");
      this.card2 = createElement("h1");
      this.card3 = createElement("h1");
      this.card4 = createElement("h1");
      this.card5 = createElement("h1");
      this.card6 = createElement("h1");
      this.card7 = createElement("h1");
      this.card8 = createElement("h1");
      this.card9 = createElement("h1");
    

    }
  
  
    hide(){
      this.input.hide();
      this.button.hide();
      this.message.hide();
      this.message1.hide();
      this.message2.hide();
    }
  
    play(){
      image(bg4Image,0,0,width,height);
      //console.log("play is working");
    }
  
    display(){
      image(backgroundImage,0,0,width,height);
      this.question.html("Question:- Person Having Two Faces.");
      this.question.position(390,80);
      this.input.position(540,230);
      this.button.position(560,300);
      this.input.class("customInput");
      this.button.class("customButton");
      this.question.class("greeting");
      this.message.class("greeting");
      this.message1.class("greeting");
      this.message2.class("greeting");

      this.card1.position(800,190);
      this.card1.html("Y");
      this.card1.class("thecard");
  
      this.card2.position(900,190);
      this.card2.html("P");
      this.card2.class("thecard");
  
      this.card3.position(1000,190);
      this.card3.html("O");
      this.card3.class("thecard");
  
      this.card4.position(1100,190);
      this.card4.html("C");
      this.card4.class("thecard");
  
      this.card5.position(1200,190);
      this.card5.html("H");
      this.card5.class("thecard");

      this.card6.position(833,260);
      this.card6.html("I");
      this.card6.class("thecard");
  
      this.card7.position(938,260);
      this.card7.html("R");
      this.card7.class("thecard");
  
      this.card8.position(1040,260);
      this.card8.html("E");
      this.card8.class("thecard");
  
      this.card9.position(1140,260);
      this.card9.html("T");
      this.card9.class("thecard");

  
      this.button.mousePressed(()=>{
        this.message.html("Thank You For Answering");
        this.message.position(200, 300);
      
          
           if(Answer3 === this.input.value() ){
          score = score + 1;
          this.input.hide();
          this.button.hide();
          this.question.hide();
          this.card1.hide();
          this.card2.hide();
          this.card3.hide();
          this.card4.hide();
          this.card5.hide();
          this.card6.hide();
          this.card7.hide();
          this.card8.hide();
          this.card9.hide();
          
     }
     if(Answer1!== this.input.value()){
      lifee -=1
      //heart3.changeAnimation("twoHearts")
    }

    if(lifee === 2)
    {
      heart3.changeAnimation("twoHearts") 
    }

    if(lifee ===1){
      heart3.changeAnimation("oneHeart") 
    
    }
   })
 }
}
  
  