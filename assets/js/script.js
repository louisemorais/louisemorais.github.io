
const words = [
"Front-End Developer",
"JavaScript Enthusiast",
"React Developer",
"UI/UX Lover",
"Full Stack Developer"
];

let index = 0;
let char = 0;
let current = "";
let typing = document.querySelector(".typing");

function typeEffect(){

    if(char < words[index].length){

        current += words[index][char];
        typing.textContent = current;
        char++;

        setTimeout(typeEffect,100);

    }else{

        setTimeout(() => {

            current="";
            char=0;
            index=(index+1)%words.length;

            typeEffect();

        },1500);
    }
}

typeEffect();


const counters =
document.querySelectorAll(".number");

counters.forEach(counter => {

    const update = () => {

        const target =
        +counter.dataset.target;

        const value =
        +counter.innerText;

        const increment =
        target/50;

        if(value < target){

            counter.innerText =
            Math.ceil(value + increment);

            setTimeout(update,35);

        }else{

            counter.innerText = target;
        }
    };

    update();

});


const input =
document.getElementById("command");

const output =
document.getElementById("output");

input.addEventListener("keydown",e=>{

if(e.key==="Enter"){

const cmd =
input.value.toLowerCase();

switch(cmd){

case "help":
output.innerHTML =
`
about<br>
skills<br>
projects<br>
contact
`;
break;

case "about":
output.innerHTML =
"Desenvolvedora apaixonada por tecnologia.";
break;

case "skills":
output.innerHTML =
"HTML, CSS, JS, React, Node.js";
break;

case "projects":
output.innerHTML =
"Calculadora, Dashboard e Todo App";
break;

case "contact":
output.innerHTML =
"email@exemplo.com";
break;

default:
output.innerHTML =
"Comando não encontrado.";
}

input.value="";
}

});