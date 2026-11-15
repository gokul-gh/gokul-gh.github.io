//Initilaize an empty arrayOfBoxay
let arrayOfBox = [[], [], []];
let xOrOPlacement = 1;
let iterationCount = 0;
let isPlayerWon = 0;
let resultOutput = document.getElementById("result");

//Assigninig inputs for each box
let boxOutput1 = document.getElementById("box1");
let boxOutput2 = document.getElementById("box2");
let boxOutput3 = document.getElementById("box3");
let boxOutput4 = document.getElementById("box4");
let boxOutput5 = document.getElementById("box5");
let boxOutput6 = document.getElementById("box6");
let boxOutput7 = document.getElementById("box7");
let boxOutput8 = document.getElementById("box8");
let boxOutput9 = document.getElementById("box9");

function box1() {
  if (xOrOPlacement == 1) {
    boxOutput1.innerHTML = "x";
    arrayOfBox[0][0] = 1;
    xOrOPlacement = 0;
  } else if (xOrOPlacement == 0) {
    boxOutput1.innerHTML = "o";
    arrayOfBox[0][0] = 0;
    xOrOPlacement = 1;
  }
}

function box2() {
  if (xOrOPlacement == 1) {
    boxOutput2.innerHTML = "x";
    arrayOfBox[0][1] = 1;
    xOrOPlacement = 0;
  } else if (xOrOPlacement == 0) {
    boxOutput2.innerHTML = "o";
    arrayOfBox[0][1] = 0;
    xOrOPlacement = 1;
  }
}

function box3() {
  if (xOrOPlacement == 1) {
    boxOutput3.innerHTML = "x";
    arrayOfBox[0][2] = 1;
    xOrOPlacement = 0;
  } else if (xOrOPlacement == 0) {
    boxOutput3.innerHTML = "o";
    arrayOfBox[0][2] = 0;
    xOrOPlacement = 1;
  }
}

function box4() {
  if (xOrOPlacement == 1) {
    boxOutput4.innerHTML = "x";
    arrayOfBox[1][0] = 1;
    xOrOPlacement = 0;
  } else if (xOrOPlacement == 0) {
    boxOutput4.innerHTML = "o";
    arrayOfBox[1][0] = 0;
    xOrOPlacement = 1;
  }
}

function box5() {
  if (xOrOPlacement == 1) {
    boxOutput5.innerHTML = "x";
    arrayOfBox[1][1] = 1;
    xOrOPlacement = 0;
  } else if (xOrOPlacement == 0) {
    boxOutput5.innerHTML = "o";
    arrayOfBox[1][1] = 0;
    xOrOPlacement = 1;
  }
}

function box6() {
  if (xOrOPlacement == 1) {
    boxOutput6.innerHTML = "x";
    arrayOfBox[1][2] = 1;
    xOrOPlacement = 0;
  } else if (xOrOPlacement == 0) {
    boxOutput6.innerHTML = "o";
    arrayOfBox[1][2] = 0;
    xOrOPlacement = 1;
  }
}

function box7() {
  if (xOrOPlacement == 1) {
    boxOutput7.innerHTML = "x";
    arrayOfBox[2][0] = 1;
    xOrOPlacement = 0;
  } else if (xOrOPlacement == 0) {
    boxOutput7.innerHTML = "o";
    arrayOfBox[2][0] = 0;
    xOrOPlacement = 1;
  }
}

function box8() {
  if (xOrOPlacement == 1) {
    boxOutput8.innerHTML = "x";
    arrayOfBox[2][1] = 1;
    xOrOPlacement = 0;
  } else if (xOrOPlacement == 0) {
    boxOutput8.innerHTML = "o";
    arrayOfBox[2][1] = 0;
    xOrOPlacement = 1;
  }
}

function box9() {
  if (xOrOPlacement == 1) {
    boxOutput9.innerHTML = "x";
    arrayOfBox[2][2] = 1;
    xOrOPlacement = 0;
  } else if (xOrOPlacement == 0) {
    boxOutput9.innerHTML = "o";
    arrayOfBox[2][2] = 0;
    xOrOPlacement = 1;
  }
}

function box() {
  if (
    (arrayOfBox[0][0] == 1 && arrayOfBox[1][0] == 1 && arrayOfBox[2][0] == 1) ||
    (arrayOfBox[0][1] == 1 && arrayOfBox[1][1] == 1 && arrayOfBox[2][1] == 1) ||
    (arrayOfBox[0][2] == 1 && arrayOfBox[1][2] == 1 && arrayOfBox[2][2] == 1) ||
    (arrayOfBox[0][0] == 1 && arrayOfBox[1][1] == 1 && arrayOfBox[2][2] == 1) ||
    (arrayOfBox[0][2] == 1 && arrayOfBox[1][1] == 1 && arrayOfBox[2][0] == 1) ||
    (arrayOfBox[0][0] == 1 && arrayOfBox[0][1] == 1 && arrayOfBox[0][2] == 1) ||
    (arrayOfBox[1][0] == 1 && arrayOfBox[1][1] == 1 && arrayOfBox[1][2] == 1) ||
    (arrayOfBox[2][0] == 1 && arrayOfBox[2][1] == 1 && arrayOfBox[2][2] == 1)
  ) {
    resultOutput.innerHTML = "X has won";
    isPlayerWon = 1;
  } else if (
    (arrayOfBox[0][0] == 0 && arrayOfBox[1][0] == 0 && arrayOfBox[2][0] == 0) ||
    (arrayOfBox[0][1] == 0 && arrayOfBox[1][1] == 0 && arrayOfBox[2][1] == 0) ||
    (arrayOfBox[0][2] == 0 && arrayOfBox[1][2] == 0 && arrayOfBox[2][2] == 0) ||
    (arrayOfBox[0][0] == 0 && arrayOfBox[1][1] == 0 && arrayOfBox[2][2] == 0) ||
    (arrayOfBox[0][2] == 0 && arrayOfBox[1][1] == 0 && arrayOfBox[2][0] == 0) ||
    (arrayOfBox[0][0] == 0 && arrayOfBox[0][1] == 0 && arrayOfBox[0][2] == 0) ||
    (arrayOfBox[1][0] == 0 && arrayOfBox[1][1] == 0 && arrayOfBox[1][2] == 0) ||
    (arrayOfBox[2][0] == 0 && arrayOfBox[2][1] == 0 && arrayOfBox[2][2] == 0)
  ) {
    resultOutput.innerHTML = "O has won";
    isPlayerWon = 1;
  }
  ++iterationCount;
  if (iterationCount == 9 && isPlayerWon != 1) {
    resultOutput.innerHTML = "Match draw";
  }
}

//Function to clear values
function reset() {
  arrayOfBox = [[], [], []];
  resultOutput.innerHTML = "";
  xOrOPlacement = 1;
  xOrOPlacement = 1;
  iterationCount = 0;
  isPlayerWon = 0;

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      boxOutput1.innerHTML = "";
      boxOutput2.innerHTML = "";
      boxOutput3.innerHTML = "";
      boxOutput4.innerHTML = "";
      boxOutput5.innerHTML = "";
      boxOutput6.innerHTML = "";
      boxOutput7.innerHTML = "";
      boxOutput8.innerHTML = "";
      boxOutput9.innerHTML = "";
    }
  }
}
