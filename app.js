let userscore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorePara = document.querySelector("#user-score");

const compscorePara = document.querySelector("#comp-score");
const gencompchoice =() => {
    const options = ["rock","paper","scissor"];
    const ranIdx = Math.floor(Math.random() *3);
    return options[ranIdx];
};

const drawGame = ()=> {
    msg.innerText ="Game was draw.Play again!";
    msg.style.backgroundColor ="black";
};
    const showWinner = (userwin, userchoice, compchoice) =>{
        if(userwin){
            userscore++;
            userscorePara.innerText=userscore;
            msg.innerText =`You Win! your ${userchoice} beats ${compchoice}`;
            msg.style.backgroundColor = "green";
        }else{
            compscore++;
            compscorePara.innerText=compscore;
            msg.innerText =`You lost. ${compchoice} beats  your ${userchoice}`; 
            msg.style.backgroundColor = "red";          
        }
    };

const playgame =(userchoice) =>{
    console.log("user choice =", userchoice);
    const compchoice = gencompchoice();
    console.log("comp choice =", compchoice);

    if(userchoice === compchoice){
        drawGame();
    }else {
        let userwin = true;
        if(userchoice ==="rock"){
            userwin =compchoice ==="paper"? false :true;
        }else if (userchoice ==="paper"){
            userwin = compchoice ==="scissor" ? false : true;

        }else {
            userwin =compchoice ==="rock" ?false : true;
        }
        showWinner(userwin, userchoice, compchoice);
    }

}; 

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id");
      playgame(userchoice);
    });
});
