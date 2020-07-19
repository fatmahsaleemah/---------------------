let tasks = [];

function addTask(){
let newTask =document.getElementById("task").value;
tasks.push(newTask);
document.getElementById("tasks-list").innerHTML += "<li>" + newTask + "</li>";
}



const sec = document.querySelector(".sec");
const min = document.querySelector(".min");
const hr = document.querySelector(".hr");
setInterval(function(){
  let time  = new Date();
  let secs = time.getSeconds() * 6;
  let mins = time.getMinutes() * 6;
  let hrs = time.getHours() * 30;
  sec.style.transform = `rotateZ(${secs}deg)`;
  min.style.transform = `rotateZ(${mins}deg)`;
  hr.style.transform = `rotateZ(${hrs+(mins/12)}deg)`;
});




const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    // change the theme of the website
   document.body.classList.toggle('dark');
});



var btn = document.querySelector('button'),
inpt = document.getElementById('input'),
 dv = document.getElementById('div'),
 txt = document.querySelector('textarea');




btn.onclick = function() {

'use strict';

if (inpt.value && txt.value !='') {

dv.innerHTML += '<h4>' + inpt.value + '</h4>'  + '<p>' + txt.value + '</p>';
txt.value = ''; 

var pp = document.querySelectorAll('p');

for (var i = 0; i < pp.length; i++) {
 
} 
  
}

};

