// Player Class

class Player {
    constructor(startX, startY, velocityX, velocityY, game)
    {
        this.x=startX;
        this.y=startY;
        this.body=[];
        this.color={head:"white",body:"green"};
        this.size=game.gridSize;
        this.game=game;
        this.xVel=velocityX;
        this.yVel=velocityY;
        this.tail=1;
    }

    SetSize(size)
    {
        this.size=size;
    }
    Reset()
    {
        this.xVel=0;
        this.yVel=0;
        this.tail=1;
        this.body=[];
    }
    //Movement Handlers
    MoveLeft()
    {
        this.xVel=-1;
        this.yVel=0;
    }

    MoveRight()
    {
        this.xVel=1;
        this.yVel=0;
    }

    MoveUp()
    {
        this.xVel=0;
        this.yVel=-1;
    }

    MoveDown()
    {
        this.xVel=0;
        this.yVel=1;
    }
    
    // Draw Player
    Draw()
    {
        this.game.ctx.save();
        // Draw Head
        this.game.ctx.fillStyle=this.color.head;
        this.game.ctx.fillRect(this.x*this.size,this.y*this.size,this.size-2,this.size-2);

        //Draw Body
        this.game.ctx.fillStyle=this.color.body;
        for (var i=1;i<this.body.length;i++)
        {
            this.game.ctx.fillRect(this.body[i].x*this.size,this.body[i].y*this.size,this.size-2, this.size-2)
        }        
        this.game.ctx.restore();
    }

    Update()
    {
        this.body.push({x:this.x,y:this.y});
         while (this.body.length>this.tail)
              this.body.shift();
        this.x +=this.xVel;
        this.y +=this.yVel;
        
        // Hit apple?  Make it go away
        if (this.x == this.game.apple.x && this.y==this.game.apple.y)
        {
            this.tail+=this.game.apple.value;
            //this.tail++;
            this.game.apple.Eaten(this.game.tilecount);
            this.game.score+=this.game.apple.value;
        }

        for (var i=1;i<this.body.length;i++)
        {
            if (this.body[i].x==this.x  && this.body[i].y==this.y)
                {
                    this.tail=1;
                    this.game.lives--;

                    if(this.game.lives==0)
                    {
                       this.game.StopGame();     
                    }
                }
        }
        
        if (this.x<0)
        {
            this.x=this.game.tilecount-1;
        }
        if (this.x>this.game.tilecount-1)
        {
            this.x=0;
        }
        if (this.y<2)
        {
            this.y=this.game.tilecount-1;
        }
        if (this.y>this.game.tilecount-1)
        {
            this.y=2;
        }
    }
}
