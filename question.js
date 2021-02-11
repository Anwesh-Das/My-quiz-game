class Question{
    constructor() {
      this.input1 = createInput('Enter your name here');
      this.input2 = createInput('Enter correct option');
      this.button = createButton('Submit');
      this.title = createElement('h2');
      this.question = createElement('h2');
      this.option1 = createElement('h2');
      this.option2 = createElement('h2');
      this.option3 = createElement('h2');
      this.option4 = createElement('h2');
}

    hide(){
      this.button.hide();
      this.input1.hide();
      this.input2.hide();
      this.title.hide();
      this.question.hide();
      this.option1.hide();
      this.option2.hide();
      this.option3.hide();
      this.option4.hide();
    }
  
    display(){

      for(var plr in allcontestants){
         var correctAns = "2";
      if(correctAns === allcontestants[plr].answer){
         fill("green"); 
         } 
      else{
        fill("red");
      }
      }


      this.title.html("My Quiz Game");
      this.title.position(displayWidth/2 - 50, 0);
  
      this.input1.position(displayWidth/2 - 300 , displayHeight/2 - 50);
      this.input2.position(displayWidth/2 + 100 , displayHeight/2 - 50);
      this.button.position(displayWidth/2 - 30, displayHeight/2);

      this.question.html("Question:- What starts and ends with the letter 'E',but has only one letter? ");
      this.question.position(displayWidth/2 - 400 , displayHeight/2 -300);

      this.option1.html("1 : Everyone ");
      this.option1.position(displayWidth/2 - 400 , displayHeight/2 -260);

      this.option2.html("2 : Envelope");
      this.option2.position(displayWidth/2 - 400 , displayHeight/2 -220);

      this.option3.html("3 : Estimate");
      this.option3.position(displayWidth/2 - 400 , displayHeight/2 -180);

      this.option4.html("4 : Example");
      this.option4.position(displayWidth/2 - 400 , displayHeight/2 -140);
  
      this.button.mousePressed(()=>{
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        contestant.name = this.input1.value();
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
      });
  
    }
  }
  