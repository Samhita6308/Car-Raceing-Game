class Gamestate{
    constructor(){
        
    }
    getState(){
        var dataRefrence = database.ref('gameState')
        dataRefrence.on("value", function(data){
            gameState = data.val()
        })
    }
    update(state){
        database.ref('/').update({
            gameState: state
        })
    }
    async start(){
        if(gameState === 0){
            player = new Player()
            var playerCountref = await database.ref('playerCount').once("value")
            if(playerCountref.exists()){
                playerCount = playerCountref.val()
                player.getCount()
            }
        }
        form = new Form()
        form.display()
    }
    play(){
        form.hide()
        Player.getPlayerInfo()
        if(allPlayers !== undefined){
            var displayPosition = 150
            displayPosition = displayPosition + 40
            for(var plr in allPlayers){
                if(plr === "player" + player.index)
                fill("orange")
                else
                fill("green")
            }
        }
        if (keyDown(UP_ARROW) && player.index !== null){
            player.distance = player.distance + 50
            player.update()
        }
    }
    end(){}
}