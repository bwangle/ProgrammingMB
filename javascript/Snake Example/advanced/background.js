// Background Class
class Background {
    constructor(game)
    {
        this.game=game;
    }

    Draw(gameStatus)
    {
        
        switch (gameStatus)
        {
            case GAMESTATE.INITIAL:
                this.DrawInitialScreen();
                break;
            case GAMESTATE.RUNNING:
                this.DrawBackgroundScreen();
                break; 
            case GAMESTATE.STOPPED:
                this.DrawGameOverScreen();
                break;   
        }
    }

    DrawBackgroundScreen()
    {  
        // Background
        this.game.ctx.save();
        this.game.ctx.clearRect(0, 0, this.game.width, this.game.height);
        this.game.ctx.beginPath();
        this.game.ctx.fillStyle='black';
        this.game.ctx.fillRect(0, 0,  this.game.width, this.game.height);   

        this.game.ctx.fillStyle='red';
        this.game.ctx.fillRect(0, 0,  this.game.width, this.game.gameBorder);   
    
        this.game.ctx.fillStyle='white';
        this.game.ctx.font = "25px Arial";
        this.game.ctx.fillText("Score: "+this.game.score , 10, 25);
        this.game.ctx.fillText("Snake " , 240, 25);
        this.game.ctx.fillText("Lives: " , 460, 25);
        this.game.ctx.fillStyle="lime";
        
        for(var i=0;i<this.game.lives;i++)
            this.game.ctx.fillRect(550+i*20,27,-18,-18);
        
        this.game.ctx.restore();
    }

    DrawInitialScreen()
    {
        this.game.ctx.save();

        this.DrawBackgroundScreen();

        // Text
        this.game.ctx.fillStyle="lime";
        this.game.ctx.font = "50px Arial";
        //this.game.ctx.fillText("Snake", 220, 150);
        this.game.ctx.font = "25px Arial";
        this.game.ctx.fillText("Press Space to Begin", 170, 300);

        this.game.ctx.restore();
    }

    DrawGameOverScreen()
    {
        this.game.ctx.save();

        this.DrawBackgroundScreen();

        // Text
        this.game.ctx.fillStyle="lime";
        this.game.ctx.font = "50px Arial";
        this.game.ctx.fillText("Game Over", 170, 190);
       
        //this.game.ctx.fillText("Game Over", 170, 220);
       
        this.game.ctx.font = "25px Arial";
        this.game.ctx.fillText("Press Space to Begin", 185, 300);

        this.game.ctx.restore();
    }
}