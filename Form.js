class Form {
  constructor() {
  this.input = createInput("Name");
  this.button = createButton('Play');
  this.greeting = createElement('h3');
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    //(130,0)
    title.position(displayWidth/2-70, displayHeight-displayHeight);
    //(130,160)
    this.input.position(displayWidth/2-70,displayHeight/2-40);
    //(225,200)
    this.button.position(displayWidth/2+25, displayHeight/2);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

    player.name = this.input.value();
      
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name );
      this.greeting.position(displayWidth/2-70, displayHeight/2-40);
    });

  }
hide(){
  this.input.hide();
  this.button.hide();
  this.greeting.hide();
}
}
