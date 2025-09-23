let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log('box clicked');
        if(turnO){
            box.innerText = "O";
            turnO = false
        }
        else{
            box.innerText = "X";
            turnO = true
        }
        box.disabled = true;

        checkwinner();
    });
});

    const disableBoxes = () => {
        for(let box of boxes){
            box.disabled = true;
        }
    };

    const enableBoxes = () => {
        for(let box of boxes){
            box.disabled = false;
            box.innerText = "";
        }
    };

    const showWinner = (winner) => {
        msg.innerHTML = `Congratulations ${winner} is Winner`;
        msgContainer.classList.remove("hide");
        disableBoxes();

    }

const checkwinner = () => {
    for(pattern of winPatterns){
        let pos1Valu = boxes[pattern[0]].innerText;
        let pos2Valu = boxes[pattern[1]].innerText;
        let pos3Valu = boxes[pattern[2]].innerText;

        if(pos1Valu != "" && pos2Valu != "" && pos3Valu != "" ){
            if(pos1Valu === pos2Valu && pos2Valu === pos3Valu){
                console.log("winner", pos1Valu);
                showWinner(pos1Valu);
                // return;
            }
        }
    }
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);