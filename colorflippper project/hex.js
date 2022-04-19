const hex = [0,1,2,3,4,5,6,7,8,9, "A", "B", "C", "D" , "E", "F"  ];

//const btns = document.getElementById("btn");
//const colorp = document.querySelector(".color");

btn.addEventListener("click", function () {

let hexcolor = "#";
for (let i = 0; i < 6; i++) {
    hexcolor += hex[getRandomNumbers()];
}

color.textContent =hexcolor;
document.body.style.backgroundColor = hexcolor;

});    


function getRandomNumbers(){
    return Math.floor(math.random() * hex.length  );
}











