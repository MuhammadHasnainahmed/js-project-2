
let color = ["pink","yellow","orange","red"];


const button = document.querySelector('#button');
const rounde  = document.querySelector('#round');

button.addEventListener('click',function () {
  rounde.style.background = color[Math.floor(Math.random()*color.length)]
  button.style.background = color[Math.floor(Math.random()*color.length)]
//   return Math.floor(Math.random() * 4 + color);

   
   
   console.log('button Clicked' );

})

