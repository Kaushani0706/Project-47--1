class Welcome {
    costructor(){
      this.message = createElement("h1");
      this.input = createInput("").attribute("placeholder","Enter Your Name");
      this.button = createButton("start");
    }

    hide(){
        this.message.hide();
        this.input.hide();
        this.button.hide();
    }

    play(){
        image(startbg,0,0,width,height); 
        //console.log("play is working") ;
    }



    display(){
     // image(startbg,0,0,width,height);
        this.message.html("Welcome To The World Of Words");
        this.message.position(440,80);
        this.input.position(520,230);
        this.button.position(540,300);
        this.message.class("greeting");
        this.input.class("customInput");
        this.button.class("customButton");

        this.button.mousepressed(()=>{
        this.input.hide();
        this.message.hide();
        this.button.hide();
        round1.display();
      })
    }
}