let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let start = document.querySelector("#start");
let message = document.querySelector(".message-container");
let Winner = document.querySelector("#winner");

let turn = true;

const winPatterns = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8]
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn) {
      box.innerText = "O";
      turn = false;
    } else {
      box.innerText = "X";
      turn = true; 
    }
    box.disabled = true;
    checkWinner();
  });
});

const showWinner = (player) => {
  Winner.innerText = `🎉 Congratulations! Winner is ${player}`;
  message.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
  boxes.forEach(box => box.disabled = true);
};

const enableBoxes = () => {
  boxes.forEach(box => {
    box.disabled = false;
    box.innerText = "";
  });
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner(pos1val);
      }
    }
  }
};

// Reset button
resetBtn.addEventListener("click", () => {
  turn = true;
  enableBoxes();
  message.classList.add("hide");
});

// Start new game button
start.addEventListener("click", () => {
  turn = true;
  enableBoxes();
  message.classList.add("hide");
});
