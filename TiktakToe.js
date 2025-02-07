let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newbtn = document.querySelector("#new-btn");
let msgcont = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

let turn0 = true; 

const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgamre = ()=>{
 turn0=true;
 enablebox();
 msgcont.classList.add("hide");

}
const enablebox = ()=>{
    for(let box of boxes){
        box.disabled = false;
box.innerHTML = ""
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        
        if(turn0){
            box.innerHTML = "O";
            turn0 = false;
        }
        else{
            box.innerHTML = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    })
});
const disablebox = ()=>{
    for(let box of boxes){
        box.disabled = true;

    }
}

const showwinner = (winner) =>{
    msg.innerHTML = `Congralutaion , Winner is ${winner}`;
    msgcont.classList.remove("hide");
    disablebox();
   }

const checkwinner = () => {
 for(let pattern of winpattern){

    let posval1 = boxes[pattern[0]].innerHTML;
    let posval2 = boxes[pattern[1]].innerHTML;
    let posval3 = boxes[pattern[2]].innerHTML;

    if(posval1!="" && posval2!="" && posval3!=""){
        if(posval1===posval2 && posval2===posval3){
            showwinner(posval1);
        }
    }
    

 }
}
newbtn.addEventListener("click", ()=>{
    resetgamre();
});
reset.addEventListener("click", ()=>{
    resetgamre();
})