console.log("TIC TAC TOE");
let turn = "X";
let gameWon = false ;
const changeTurn = () =>{
    return turn === "X" ? "O" : "X"; 
}

const play = ()=>{
    let boxTexts= document.querySelectorAll(".text");
    wins = [
        [0,1,2,0,10,0],
        [3,4,5,0,31,0],
        [6,7,8,0,52,0],
        [0,3,6,-21,31,90],
        [1,4,7,0,31,90],
        [2,5,8,21,31,90],
        [0,4,8,0,31,45],
        [2,4,6,0,31,-45]
    ];
    wins.forEach(e => {
        if((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText ) && (boxTexts[e[2]].innerText === boxTexts[e[1]].innerText ) && (boxTexts[e[2]].innerText!=="" )){
            document.querySelector(".turn").innerText = boxTexts[e[0]].innerText + " won";
            gameWon=true;
            document.querySelector(".winner").style.width = "250px";
            if(screen.width > 800){
            document.querySelector(".line").style.width = "30vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vh,${e[4]}vh) rotate(${e[5]}deg)`;
            }
            else{
                document.querySelector(".line").style.width = "60vw";
                document.querySelector(".line").style.transform = `translate(${e[3]/2}vh,${e[4]/2}vh) rotate(${e[5]}deg)`;
            }
        }
        
    })
}
let count=0;
let boxes= document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector(".text");
    element.addEventListener("click", ()=> {
        if(boxText.innerHTML === ''){
            boxText.innerHTML = turn;
            turn = changeTurn();
            play();
            count++;
        }
        
        if(!gameWon){
            document.querySelector(".turn").innerHTML = turn + " Your Turn ";
        }
        if(!gameWon && count===9){
            document.querySelector(".turn").innerHTML =" DRAW ";
        }
    })
})


reset.addEventListener("click",()=>{
    let boxes = document.querySelectorAll(".text");
    Array.from(boxes).forEach(element => {
        element.innerText = "";
    })
    document.querySelector(".winner").style.width = "0";
    turn = "X";
    gameWon=false;
    document.querySelector(".turn").innerHTML = turn + " Your Turn ";
    document.querySelector(".line").style.width = "0vw";
    count=0;
})