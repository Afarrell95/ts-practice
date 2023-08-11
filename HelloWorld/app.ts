let btn = document.querySelector('button');
let bdy = document.querySelector('body');

btn.addEventListener('click', ()=> {
 bdy.classList.toggle('dark');
})

let message : string = "click the switch button to change the background color!"

console.log(message)