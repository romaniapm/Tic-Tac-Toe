
var player1 = {token:"X"}
var player2 = {token:"O"}
var activeplayer = player1

function activePlayer() {
 if(activeplayer == player1){
  activeplayer = player2;
} else {
  activeplayer = player1;
}}

var box1 = document.getElementById("topleft");
box1.addEventListener("click", function(){
  box1.innerHTML = activeplayer.token;

// if activeplayer =player1, then = player2

activePlayer();

});

var box2 = document.getElementById("topcenter");
box2.addEventListener("click", function(){
   box2.innerHTML = activeplayer.token;
 activePlayer();
});



var box3 = document.getElementById("topright");
box3.addEventListener("click", function(){
  box3.innerHTML = activeplayer.token;
 activePlayer();
});



var box4 = document.getElementById("middleleft");
box4.addEventListener("click", function(){
  box4.innerHTML = activeplayer.token;
 activePlayer();
});



var box5 = document.getElementById("middlecenter");
box5.addEventListener("click", function(){
  box5.innerHTML = activeplayer.token;
 activePlayer();
});



var box6 = document.getElementById("middleright");
box6.addEventListener("click", function(){
  box6.innerHTML = activeplayer.token;
 activePlayer();
});



var box7 = document.getElementById("bottomleft");
box7.addEventListener("click", function(){
  box7.innerHTML = activeplayer.token;
 activePlayer();
});



var box8 = document.getElementById("bottomcenter");
box8.addEventListener("click", function(){
  box8.innerHTML = activeplayer.token;
 activePlayer();
});



var box9 = document.getElementById("bottomright");
box9.addEventListener("click", function(){
  box9.innerHTML = activeplayer.token;
 activePlayer();
});



