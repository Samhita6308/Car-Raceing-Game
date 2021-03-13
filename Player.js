class Player{
    constructor(){
     this.name = null
     this.index = null   
    }
    getCount(){
        var dataRefrence = database.ref('playerCount')
        dataRefrence.on("value", function(data){
            playerCount = data.val()
    })}
updateCount(count){
    database.ref('/').update({
        playerCount: count
    })
}
update(){
    var playerIndex = "players/player" + this.index
    database.ref(playerIndex).set({
        name: this.name
    })
}
static getPlayerInfo(){
var playerInfoRefrence = database.ref('players')
playerInfoRefrence.on("value", function(data){
    allPlayers = data.val()
})
}
}