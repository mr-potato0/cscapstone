let d;
let time;
function ballInitiate(){
    ball = document.querySelector("#ball");
    ball.innerHTML="";
    ballSize=30+"px";
    ball.style.height = ballSize;
    ball.style.width = ballSize;
    ball.style.borderRadius = ballSize;
    ball.style.backgroundColor = "blue";

    let ymargin = 300;
    let ymarginFinal = ymargin+"px";
    ball.style.marginTop=ymarginFinal;

    let xmargin = 0;
    let xmarginFinal = xmargin+"px";
    ball.style.marginLeft=xmarginFinal;

    d = new Date();
    time = d.getTime();
}

ballInitiate();

const theta = Math.PI/4;
const vo = 108.5;
const vx = vo*Math.cos(theta);
const vy = vo*Math.sin(theta);
const g = 9.81;

const tmid = -1*vy/g;

function currentTime(){
    let d2 = new Date();
    let ctime = d2.getTime();
    let newTime = ctime - time;
    let finTime = newTime / 500;
    return finTime
}

function nextFrame(){
    ymarginFinal = yDir(currentTime());
    if(ymargin>=400){
        ball.style.backgroundColor = "red";
        ball.style.textalign="center";
        ball.style.borderRadius="0px";
        ball.innerHTML = "(" + xmarginFinal + ", " + ymarginFinal + ")";
        clearInterval(animation);
        setTimeout(function(){
            ballInitiate();
            setInterval(animation, 20);
        }, 2000);
    } else{
        ball.style.marginTop=ymarginFinal;
        xmarginFinal = xDir(currentTime());
        ball.style.marginLeft=xmarginFinal;
        
    }
}

let animation = nextFrame;
setInterval(animation, 20);

function yDir(t){
    ymargin = 300 - vy*t + 9.81/2*(t**2);
    if(ymargin > 400){
        return 400 + "px";
    } else{
        return ymargin + "px";
    }
}

function xDir(t){
    let xmarg = vx*t;
    return Math.round(xmarg)+"px";
}