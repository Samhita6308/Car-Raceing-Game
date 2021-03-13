class Form{
    constructor(){
        this.input =  createInput("name")
        this.button = createButton('Start Game')
        this.greeting = createElement('h4')
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
    display(){
        var title = createElement('h2')
        title.html("A Random Car Race")
        title.position(350, 30)
        this.input.position(350,100)
        this.button.position(400,180)
        this.button.mousePressed(function(){
           // this.input.hide()
            this.button.hide()
            var name = this.input.value()
            playerCount = playerCount+ 1
            player.update(name)
            player.updateCount(playerCount)
            this.greeting.html("Welcome"+ name)
            this.greeting.position(400,400)
        })
    }
}