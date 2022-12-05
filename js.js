const circletext = document.querySelector('.circletext p');
circletext.innerHTML=circletext.innerText.split("").map(
  (char, i)=>
  `<span style="transform:rotate(${i *12}deg)">${char}</span>`  
).join("")
const circletext0 = document.querySelector('.circletext0 p');
circletext0.innerHTML=circletext0.innerText.split("").map(
  (char, i)=>
  `<span style="transform:rotate(${i *17}deg)">${char}</span>`  
).join("")

const circletext1 = document.querySelector('.circletext1 p');
circletext1.innerHTML=circletext1.innerText.split("").map(
  (char, i)=>
  `<span style="transform:rotate(${i *15}deg)">${char}</span>`  
).join("")

const circletext2 = document.querySelector('.circletext2 p');
circletext2.innerHTML=circletext2.innerText.split("").map(
  (char, i)=>
  `<span style="transform:rotate(${i *14}deg)">${char}</span>`  
).join("")


const circletext3 = document.querySelector('.circletext3 p');
circletext3.innerHTML=circletext3.innerText.split("").map(
  (char, i)=>
  `<span style="transform:rotate(${i *18}deg)">${char}</span>`  
).join("")
