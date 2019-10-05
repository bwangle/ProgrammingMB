var btnStart = document.getElementById('btnStart');
var btnReset = document.getElementById('btnReset');
var rngFPS = document.getElementById('rngFps');
var rngGridSize = document.getElementById('rngGridSize');

btnStart.addEventListener('click', StartGame);
btnReset.addEventListener('click', ResetGame);


 function StartGame ()
{
    if (game != null)
       game.StartGame();
}

function ResetGame()
{
    
}

rngFPS.oninput = function() {
    game.SetFPS(rngFPS.value);
}

rngGridSize.oninput = function()
{
    game.SetGridSize(rngGridSize.value);
}