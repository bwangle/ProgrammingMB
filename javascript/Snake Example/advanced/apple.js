// Apple Class
class Apple {
    constructor(startX, startY, game)
    {
        this.x=startX;
        this.y=startY;
        this.size=game.gridSize;
        this.game=game;
        this.color="red";
        this.colorlist=["red","coral","blue","yellow","orange","cyan","magenta","blueviolet","beige","cornflowerblue"];
        this.value=1;
    }
    
    Draw()
    {
        this.game.ctx.fillStyle=this.color;
        this.game.ctx.fillRect(this.x*this.size,this.y*this.size,this.size-2,this.size-2);
    }

    ChooseColor()
    {
        var curr=this.color;
        var idx = Math.floor(Math.random()*this.colorlist.length)
        var next = this.colorlist[idx];
        while (next==curr)
        {
            idx = Math.floor(Math.random()*this.colorlist.length);
            next = this.colorlist[idx];
        }
           this.value = idx+1;
        return next;
    }

    Eaten()
    {
        var borderTiles=this.game.gameBorder/this.game.gridSize;
        this.x=Math.floor(Math.random()*this.game.tilecount);
        this.y=Math.floor(Math.random()*(this.game.tilecount-borderTiles)+borderTiles);
        this.color=this.ChooseColor();
    }

    SetSize(size)
    {
        this.size=size;
    }
}