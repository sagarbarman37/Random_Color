const generateColor = document.querySelector('#btn');
const body = document.querySelector('body');



function color(){
  return Math.random().toString(16).slice(2, 8).padEnd(6, 0).toUpperCase();
}


generateColor.addEventListener('click', ()=>{
  const colorCode = `#${color()}`;
  body.style.backgroundColor = colorCode;
  const input = document.querySelector('#input');
  input.value = colorCode;
  
  
})

