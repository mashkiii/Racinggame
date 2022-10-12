class Game {
  constructor() {}
  getState(){
    var gameStateRef=database.ref("gameState");
    gameStateRef.on("value",function(data){
      gameState=data.val()

    })
  }
  update(state){
    database.ref("/").update({
     gameState:state
    })
  }
  start() {
    form = new Form();
    form.display();
    player = new Player();
    playerCount=player.getCount();

  }
  handleElements(){
    form.hide();
    form.titleImg.position(30,50);
    form.titleImg.class("gameTitleAfterEffect")
  }
  play(){
    this.handleElements();
    Player.getplayersinfo();
    drawSprites();


  }
}