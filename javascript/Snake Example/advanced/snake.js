 
// Game Class
class Game {
    constructor() {
        

        this.currentTime=0
        this.lastTime=(new Date()).getTime();
        this.delta=0;
        this.fps=15;
        this.interval=1000/this.fps;
        this.gridSize=10;
        this.gameBorder=40;
        this.gameStatus = GAMESTATE.INITIAL;

        
        this.canv = document.getElementById("gc");
        this.ctx = this.canv.getContext("2d");
        this.width=this.canv.width;
        this.height=this.canv.height;

        this.tilecount=this.canv.width/this.gridSize;

        // Create Game Objects
        this.background=new Background(this);
        this.player = new Player(15, 15, 0, 0, this);   
        this.apple = new Apple(10,10,this);
        document.addEventListener("keydown",ev=>this.KeyPush(ev));
    }  

    Initialize()
    {
        this.score=0;
        this.lives=3; 
        this.player.Reset();

        // Draw Background Screen
        this.background.Draw(this.gameStatus);  
    }

    SetFPS(fps)
    {
        this.fps=fps;
        this.interval=1000/fps;
    }

   SetGridSize(gridsize)
   {
       this.gridSize = gridsize;
       this.tilecount=this.canv.width/this.gridSize;
       this.apple.SetSize(gridsize);
       this.player.SetSize(gridsize);

   }
    
    StartGame()
    {
        this.Initialize();
        this.gameStatus=GAMESTATE.RUNNING;
        this.currentTime = (new Date()).getTime();
        this.delta = (this.currentTime - this.lastTime);

        window.requestAnimationFrame(()=>this.GameLoop());
    }

    StopGame()
    {
        this.gameStatus=GAMESTATE.STOPPED;
        this.background.Draw(this.gameStatus);  
    }
    
    DrawScreen()
    {
        this.ctx.save();
       
        this.background.Draw(this.gameStatus);
        this.apple.Draw();
        this.player.Draw(); 

        this.ctx.restore();
    }

    KeyPush(evt)
    {
        //console.log(evt);
        if (this.gameStatus == GAMESTATE.RUNNING)
        {
            switch (evt.keyCode)
            {
                case 37:
                    this.player.MoveLeft();
                    break;
                case 38:
                    this.player.MoveUp();
                    break;
                case 39:
                    this.player.MoveRight();
                    break;
                case 40:
                    this.player.MoveDown();
                    break;
                    
            }
        }

        if ((this.gameStatus == GAMESTATE.INITIAL|| this.gameStatus == GAMESTATE.STOPPED) && (evt.keyCode == 32))
            this.StartGame();
    }

    GameLoop()
    {
        if (this.gameStatus == GAMESTATE.RUNNING)     
        {
            window.requestAnimationFrame(()=>this.GameLoop());
            this.currentTime = (new Date()).getTime();
            this.delta = (this.currentTime - this.lastTime);
            //this.apple.x+=1;
            if (this.delta >this.interval)
            {
                this.player.Update(this.tilecount,this.apple);
                if (this.gameStatus == GAMESTATE.RUNNING)     
                    this.DrawScreen(this);
                this.lastTime = this.currentTime - (this.delta % this.interval);
            }
        }
    }
}


