let boxes = document.querySelectorAll(".b");
let resetbtn = document.querySelector(".resetgame");
let wmsgbox = document.querySelector(".winmsgbox");
let wmsg = document.querySelector("#winmsg");
let newgm = document.querySelector(".newgame");


const wptns=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]

let turn0=true;
let count=0;


boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        addtxt(box);
        let isWinner = checkWinner();
        if(isdraw(isWinner)){
            drawmsg();
        }
    });
})

function addtxt(box){
    if(turn0){
        box.innerText="O";
        turn0 = false;
    }else{
        box.innerText="X";
        turn0 = true;
    }
    box.disabled = true;
}


const checkWinner = () => {
    for (let pattern of wptns) {
       let pos1Val = boxes[pattern[0]-1].innerText;
       let pos2Val = boxes[pattern[1]-1].innerText;
       let pos3Val = boxes[pattern[2]-1].innerText;
  
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
           winmsgdisplay(pos1Val);
           return true;
        }
      }
    }
}

const winmsgdisplay=(x)=>{
    wmsg.innerText=`PLAYER ${x} WON! CONGRATULATIONS!`;
    boxes.forEach((box)=>{
        box.disabled = true;
    })
    wmsgbox.classList.remove("hide");
    newgm.classList.remove("hide");
    resetbtn.classList.add("hide");
}

const drawmsg=(x)=>{
    wmsg.innerText=`THE GAME IS A DRAW!`;
    wmsgbox.classList.remove("hide");
    newgm.classList.remove("hide");
    resetbtn.classList.add("hide");
}

const isdraw=(isWinner)=>{
    if(!isWinner){
        count++;
        if(count === 9){
            return true;
        }
    }
}

newgm.addEventListener("click",()=>{
    wmsgbox.classList.add("hide");
    boxes.forEach((box) =>{
        box.disabled=false;
        box.innerText="";
    });
    newgm.classList.add("hide");
    resetbtn.classList.remove("hide");
    count=0;
    turn0=true;
})

resetbtn.addEventListener("click",()=>{
    boxes.forEach((box) =>{
        box.disabled=false;
        box.innerText="";
    });
    count=0;
    turn0=true;
})