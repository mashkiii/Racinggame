class Player {
  constructor() {
    this.name=null;
    this.index=null;
    this.positionX=0;
    this.positionY=0;
  }
  addPlayer(){
    var playerindex="player/players"+this.index;
    if (this.index==1){
     this.positionX=width/2-100
    } else {
      this.positionY=width/2+100
    }
    database.ref(playerindex).set({
      name:this.name,
      positionX:this.positionX,
      positionY:this.positionY,
    })
  }
  getCount(){
    var playerCountRef=database.ref("playerCount");
    playerCountRef.on("value",data=>{
      playerCount=data.val();

    })
  }
  updateCount(count){
    database.ref("/").update({
      playerCount:count
    })
  }
  static getplayersinfo(){
    var playerInfoRef=database.ref("players");
    playerInfoRef.on("value",data=>{
      allPlayers=data.val();

    })
  }

  
}
