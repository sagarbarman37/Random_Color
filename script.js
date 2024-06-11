const btn = document.querySelector('#btn');
const box = document.querySelector('#box');
const input = document.querySelector('#input');


function color(){
const randomNum = Math.random().toString(16).slice(2, 8).padEnd(6, 0).toUpperCase();

const hexCode = `#${randomNum}`;
box.style.backgroundColor = hexCode;
input.innerText = hexCode;
btn.style.backgroundColor = hexCode;
btn.style.color = 'white';
navigator.clipboard.writeText(hexCode);

const newBox = document.createElement('div');
  newBox.classList.add('js-box')
  body.append(newBox);
  newBox.style.backgroundColor = hexCode;
  newBox.innerText = hexCode;
  
}

color()

btn.addEventListener('click', ()=>{
  color()

})

