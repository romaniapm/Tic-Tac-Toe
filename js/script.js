
var player1 = {token:"X"}
var player2 = {token:"O"}
var activeplayer = player1

function activePlayer() {
 if(activeplayer == player1){
  activeplayer = player2;
} else {
  activeplayer = player1;
}}

function setXO() {
  if (this.innerHTML.length === 0){
    this.innerHTML = activeplayer.token;
    activePlayer();
    checkWinner();
  }
}

var box1 = document.getElementById("topleft");
// box1.addEventListener("click", function(){
//   setXO(box1);
// });
box1.addEventListener("click", setXO);


var box2 = document.getElementById("topcenter");
box2.addEventListener("click", setXO);


var box3 = document.getElementById("topright");
box3.addEventListener("click", setXO);


var box4 = document.getElementById("middleleft");
box4.addEventListener("click", setXO);


var box5 = document.getElementById("middlecenter");
box5.addEventListener("click", setXO);


var box6 = document.getElementById("middleright");
box6.addEventListener("click", setXO);


var box7 = document.getElementById("bottomleft");
box7.addEventListener("click", setXO);


var box8 = document.getElementById("bottomcenter");
box8.addEventListener("click", setXO);


var box9 = document.getElementById("bottomright");
box9.addEventListener("click", setXO);

function checkWinner (){
  // this is for the top row
  if (box1.innerHTML === box2.innerHTML && box2.innerHTML === box3.innerHTML && box1.innerHTML.length > 0) {
    if(box1.innerHTML=== "X") {
      alert("player1 is the winner")
    } else {
      alert("player2 is the winner")
    }
  }

  // this is for the middle row
  if (box4.innerHTML === box5.innerHTML && box5.innerHTML === box6.innerHTML && box4.innerHTML.length > 0) {
    if(box4.innerHTML=== "X") {
      alert("player1 is the winner")
    } else {
      alert("player2 is the winner")
    }
  }
// this is for the bottom row
  if (box7.innerHTML === box8.innerHTML && box8.innerHTML === box9.innerHTML && box7.innerHTML.length > 0) {
    if(box7.innerHTML=== "X") {
      alert("player1 is the winner")
    } else {
      alert("player2 is the winner")
    }
  }

  // this is for the first column
  if (box1.innerHTML === box4.innerHTML && box4.innerHTML === box7.innerHTML && box1.innerHTML.length > 0) {
    if(box7.innerHTML=== "X") {
      alert("player1 is the winner")
    } else {
      alert("player2 is the winner")
    }
  }

// this is for the second column
  if (box2.innerHTML === box5.innerHTML && box5.innerHTML === box8.innerHTML && box2.innerHTML.length > 0) {
    if(box2.innerHTML=== "X") {
      alert("player1 is the winner")
    } else {
      alert("player2 is the winner")
    }
  }

// this is for the second column
  if (box3.innerHTML === box6.innerHTML && box6.innerHTML === box9.innerHTML && box3.innerHTML.length > 0) {
    if(box3.innerHTML=== "X") {
      alert("player1 is the winner")
    } else {
      alert("player2 is the winner")
    }
  }

// this is for the one diagonal
  if (box1.innerHTML === box5.innerHTML && box5.innerHTML === box9.innerHTML && box1.innerHTML.length > 0) {
    if(box1.innerHTML=== "X") {
      alert("player1 is the winner")
    } else {
      alert("player2 is the winner")
    }
  }


// this is for the three diagonal
  if (box3.innerHTML === box5.innerHTML && box5.innerHTML === box7.innerHTML && box3.innerHTML.length > 0) {
    if(box3.innerHTML=== "X") {
      alert("player1 is the winner")
    } else {
      alert("player2 is the winner")
    }
  }

};



