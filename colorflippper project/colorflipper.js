const colors = [  "old lace",   "green" , "black", "brown", "blue", "rgba(255,127,80)",  " rgba  (245,222,179)" ,  "rgba( 133, 122, 200 )", "#800000", "#C0C0C0",   "#FFFF00", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function ()  {
// get random number between 0-3

const randomNumber = getRandomNumbers();
console.log(randomNumber);




document.body.style.backgroundColor=colors[randomNumber];
color.textContent=colors[randomNumber]




} );


function getRandomNumbers(){
  return Math.floor (Math.random() *colors.length)
}





