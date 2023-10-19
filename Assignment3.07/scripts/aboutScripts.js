

function nerd(){
    let pic = document.querySelector("#nerd");
    let cap = document.querySelector("#caption")
    console.log(pic.src)
    if(pic.src.includes("cscapstone/Assignment3.07/assets/nerd.jpeg")){
        cap.innerHTML = "Squirrel!";
        cap.style.color = "brown";
        pic.src="assets/squirrel.jpeg";
    } else{
        cap.innerHTML = "Nerd!";
        cap.style.color = "orange";
        pic.src="assets/nerd.jpeg";
    }
}

let squir = document.querySelector("#squir");

let mLDir = 3;
let mTDir = 3;
let marginL = 0;
let marginT = 0;

function squirInit(){
    mLDir = 3;
    mTDir = 3;
    marginL = 0;
    marginT = 0;
}

function nextFrame(){
    if(marginL > 30 || marginL < 0){
        mLDir*=-1;
    }
    if(marginT > 30 || marginT < 0){
        mTDir*=-1;
    }
    marginL+=mLDir;
    marginT+=mTDir;
    squir.style.marginLeft=marginL+"px";
    squir.style.marginTop=marginT+"px";
}

let startBut = document.querySelector("#start");
let stopBut = document.querySelector("#stop");

let spin;
function start(){
    squirInit();
    spin = setInterval(nextFrame, 20);
    startBut.style.display="none";
    stopBut.style.display="block";
}

function stop(){
    clearInterval(spin);
    squirInit();
    startBut.style.display="block";
    stopBut.style.display="none";
}
