var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var button = document.querySelector("button");

h3.textContent=color1.value + " " + color2.value;

color1.addEventListener("input", function(){
    console.log(color1.value);
    body.style.background="linear-gradient(to right, "+color1.value
        +", "+color2.value+")";
        h3.textContent=color1.value + " " + color2.value;
})

color2.addEventListener("input", function(){
    body.style.background='linear-gradient(to right, '+color1.value
        +", "+color2.value+")";
        h3.textContent=color1.value + " " + color2.value;
})

button.addEventListener("click", function(event){
    console.log(event);
    color1.value = "#ffffff";
    color2.value = "#ffffff";
    body.style.background='linear-gradient(to right, '+color1.value
    +", "+color2.value+")";
    h3.textContent=color1.value + " " + color2.value;
})

