const game=document.querySelector('.game')
const res=document.querySelector('#result')
const start=[0,0]
let position=start
let mytime
for(let i=0;i<320;i++)
{
    const block=document.createElement('div')
    block.classList.add('block')
    game.appendChild(block)
}
const snake=document.createElement('div')
snake.classList.add('snake')
game.appendChild(snake)

function drawsnake()
{
    snake.style.left=position[0]+'px'
}
(document).onkeydown(function(e){ 
    switch(e.key)
    {
        case "ArrowLeft":
        position[0]-=40;
        drawsnake()
        break;
        case "ArrowRight":
        position[0]+=40;
        drawsnake()
        break;
    }})




