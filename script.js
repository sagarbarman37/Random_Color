const generateColor = document.querySelector('#btn');
const body = document.querySelector('body');
const input = document.querySelector('#input');


function color(){
const randomNum = Math.random().toString(16).slice(2, 8).padEnd(6, 0).toUpperCase();

const hexCode = '#'+ randomNum;

body.style.backgroundColor = hexCode;

input.value = hexCode;

navigator.clipboard.writeText(hexCode)
  
}

color()

generateColor.addEventListener('click', ()=>{
  color()

})

