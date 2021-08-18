var num1=Math.random()*6;
var actualnum1=Math.floor(num1)+1;
var randomimage1 = "images/dice"+ actualnum1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimage1);

var num2=Math.random()*6;
var actualnum2=Math.floor(num2)+1;
var randomimage2 = "images/dice"+ actualnum2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomimage2);

if(actualnum1>actualnum2){
    document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if(actualnum1<actualnum2){
    document.querySelector("h1").innerHTML="Player 2 wins!";
}
else {
    document.querySelector("h1").innerHTML="Draw!";
}