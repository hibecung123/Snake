const game=document.querySelector('.game')
const res=document.querySelector('#result')
const bigsnake=document.querySelector('.snakes')
const start=[160,-60]
const boardwidth=800
const boardheight=480
let length=6
let position=start
let mytime
for(let i=0;i<320;i++)
{
    const block=document.createElement('div')
    block.classList.add('block')
    game.appendChild(block)
}
for(let i=0;i<4;i++)
{
    const smallsnake=document.createElement('div')
    smallsnake.classList.add('snake')
    bigsnake.appendChild(smallsnake)
}
const snakes=document.querySelectorAll('.snakes div')
console.log(snakes.length)
for(let i=0;i<snakes.length;i++)
{
    snakes[i].style.left=position[0]-i*40+'px'
    snakes[i].style.bottom=position[1]+'px'
    snakes[0].classList.add('head')
}

function drawsnakesfory()
{
    if(currentmove==='Top' || currentmove==='Down' || currentmove===null)
    {
        var nowy=snakes[0].style.bottom
        for(let i=0;i<snakes.length;i++)
        {
            snakes[i].classList.remove('snake')
            snakes[i].style.bottom=nowy
            if(nextmove==='Left')
            {snakes[i].style.left=position[0]+(i)*40+'px'
            }
            else
            {
                snakes[i].style.left=position[0]-(i)*40+'px'
            }
            snakes[i].classList.add('snake')
        }
    }
    else
    {
        for(let i=0;i<snakes.length;i++)
        {
            if(currentmove==='Left')
            {snakes[i].style.left=position[0]+(i)*40+'px'}
            else
            {
                snakes[i].style.left=position[0]-(i)*40+'px'
            }
        }
    }
}
function drawsnakesforx()
{
    if(currentmove==='Left' || currentmove==='Right' || currentmove===null)
    {
        var nowx=snakes[0].style.left
        for(let i=0;i<snakes.length;i++)
        {
            snakes[i].classList.remove('snake')
            snakes[i].style.left=nowx
            if(nextmove==='Top')
            {snakes[i].style.bottom=position[1]-(i)*30+'px'}
            else
            {
            snakes[i].style.bottom=position[1]+(i)*30+'px'
            }
            snakes[i].classList.add('snake')
        }
    }
    else
    {
        for(let i=0;i<snakes.length;i++)
        {
            if(currentmove==='Top')
            {snakes[i].style.bottom=position[1]-(i)*30+'px'}
            else
            {
                snakes[i].style.bottom=position[1]+(i)*30+'px'
            }
        }
    }
}
let currentmove=null
let nextmove=null
document.addEventListener('keydown',move)
function move(e)
{   
    switch(e.key)
    {
        case "ArrowLeft":
        {
            if(currentmove==='Left' || currentmove==='Right')
            {break;}
            else {
            clearInterval(mytime)    
            mytime=setInterval(Left,400)}
            break;
        }
        case "ArrowRight":
        {
            if(currentmove==='Left' || currentmove==='Right')
            {break;}
            else {
            clearInterval(mytime)
            mytime=setInterval(Right,400)}
            break;
        }
        case "ArrowUp":
        {
            if(currentmove==='Top' || currentmove==='Down')
            {break;}
            else {
            clearInterval(mytime)
            mytime=setInterval(Top,400)}
            break;
        }
        case "ArrowDown":
        {
            if(currentmove==='Top' || currentmove==='Down')
            {break;}
            else {
            clearInterval(mytime)
            mytime=setInterval(Down,400)}
            break;
        }
    }
}

function Left()
{   
    nextmove="Left"
    position[0]-=(snakes.length-1)*40;
    drawsnakesfory();
    setTimeout(checkhit,50)
    currentmove=nextmove
}
function Right()
{
    
    nextmove="Right"
    position[0]+=(snakes.length-1)*40;
    drawsnakesfory();
    setTimeout(checkhit,50)
    currentmove=nextmove
}
function Top()
{
    nextmove="Top"
    position[1]+=(snakes.length-1)*30;
    drawsnakesforx();
    setTimeout(checkhit,50)
    currentmove=nextmove
}
function Down()
{
    nextmove="Down"
    position[1]-=(snakes.length-1)*30;
    drawsnakesforx();
    setTimeout(checkhit,50)
    currentmove=nextmove
   
}
let currx
let curry
function checkhit()
{
    console.log(position[0])
    currx=parseInt(snakes[0].style.left)
    curry=parseInt(snakes[0].style.bottom)
    if(currx <= 0 || currx >=760 || curry>=0 || curry<=-450)
    {
    clearInterval(mytime)
    }    
}

