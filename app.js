document.getElementById("cross")
        .addEventListener("click", function() {
  document.getElementById("popUp").hidden = true;
});


let btn1 = document.querySelector('#one');
let btn2 = document.querySelector('#two');
let btn3 = document.querySelector('#three');
let btn4 = document.querySelector('#four');
let btn5 = document.querySelector('#five');
let btn6 = document.querySelector('#six');
let bckGr = document.querySelector('#back-ground');


btn1.addEventListener('click', () =>{
  bckGr.style.backgroundImage = "url(Rectangle_1.svg)";
  document.getElementById("manImage").hidden = false;
  // document.querySelector(".small-square").style.display = "none"; //pochemu ne rabotaet .hidden
  document.querySelectorAll('.small-square').forEach(function(el) {
    el.style.display = 'none';
 });
  document.querySelector("#small-square-1").style.display = "block";
  
});

btn2.addEventListener('click', () =>{
  bckGr.style.backgroundImage = "url(https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)";
  document.getElementById("manImage").hidden = true;
  // document.querySelector(".small-square").style.display = "none";
  document.querySelectorAll('.small-square').forEach(function(el) {
    el.style.display = 'none';
 });
  document.querySelector("#small-square-2").style.display = "block";
});

btn3.addEventListener('click', () =>{
  bckGr.style.backgroundImage = "url(https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)";
  document.getElementById("manImage").hidden = true;
  // document.querySelector(".small-square").style.display = "none";
  document.querySelectorAll('.small-square').forEach(function(el) {
    el.style.display = 'none';
 });
  document.querySelector("#small-square-3").style.display = "block";
});

btn4.addEventListener('click', () =>{
  bckGr.style.backgroundImage = "url(https://images.unsplash.com/photo-1497215842964-222b430dc094?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)";
  document.getElementById("manImage").hidden = true;
  // document.querySelector(".small-square").style.display = "none";
  document.querySelectorAll('.small-square').forEach(function(el) {
    el.style.display = 'none';
 });
  document.querySelector("#small-square-4").style.display = "block";
});

btn5.addEventListener('click', () =>{
  bckGr.style.backgroundImage = "url(https://images.unsplash.com/photo-1505409859467-3a796fd5798e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)";
  document.getElementById("manImage").hidden = true;
  // document.querySelector(".small-square").style.display = "none";
  document.querySelectorAll('.small-square').forEach(function(el) {
    el.style.display = 'none';
 });
  document.querySelector("#small-square-5").style.display = "block";
});

btn6.addEventListener('click', () =>{
  bckGr.style.backgroundImage = "url(https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80)";
  document.getElementById("manImage").hidden = true;
  // document.querySelector(".small-square").style.display = "none";
  document.querySelectorAll('.small-square').forEach(function(el) {
    el.style.display = 'none';
 });
  document.querySelector("#small-square-6").style.display = "block";
});
