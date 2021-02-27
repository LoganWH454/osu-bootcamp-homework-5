// Text inputs
let textInput9 = document.querySelector('#hour9');
let textInput10 = document.querySelector('#hour10');
let textInput11 = document.querySelector('#hour11');
let textInput12 = document.querySelector('#hour12');
let textInput1 = document.querySelector('#hour1');
let textInput2 = document.querySelector('#hour2');
let textInput3 = document.querySelector('#hour3');
let textInput4 = document.querySelector('#hour4');
let textInput5 = document.querySelector('#hour5');

let date = document.querySelector('#currentDay');

// Save buttons 
const saveBtn9 = document.querySelector('.saveBtn9');
const saveBtn10 = document.querySelector('.saveBtn10');
const saveBtn11 = document.querySelector('.saveBtn11');
const saveBtn12 = document.querySelector('.saveBtn12');
const saveBtn1 = document.querySelector('.saveBtn1');
const saveBtn2 = document.querySelector('.saveBtn2');
const saveBtn3 = document.querySelector('.saveBtn3');
const saveBtn4 = document.querySelector('.saveBtn4');
const saveBtn5 = document.querySelector('.saveBtn5');

// Set today's time
date = moment().format('dddd, MMMM Do, YYYY');
$('#currentDay').text(date);

// Function to get local storage and add to text area
function init9(){
    let text9 = JSON.parse(localStorage.getItem('text9'));
    textInput9.value = text9;
}

function init10(){
    let text10 = JSON.parse(localStorage.getItem('text10'));
    textInput10.value = text10;
}

function init11(){
    let text11 = JSON.parse(localStorage.getItem('text11'));
    textInput11.value = text11;
}

function init12(){
    let text12 = JSON.parse(localStorage.getItem('text12'));
    textInput12.value = text12;
}

function init1(){
    let text1 = JSON.parse(localStorage.getItem('text1'));
    textInput1.value = text1;
}

function init2(){
    let text2 = JSON.parse(localStorage.getItem('text2'));
    textInput2.value = text2;
}

function init3(){
    let text3 = JSON.parse(localStorage.getItem('text3'));
    textInput3.value = text3;
}

function init4(){
    let text4 = JSON.parse(localStorage.getItem('text4'));
    textInput4.value = text4;
}

function init5(){
    let text5 = JSON.parse(localStorage.getItem('text5'));
    textInput5.value = text5;
}

// Save to local storage on saveBtn click for each hour

saveBtn9.addEventListener('click', function(event) {
    event.preventDefault();
    let text9 = document.querySelector('#hour9').value;
    localStorage.setItem('text9',JSON.stringify(text9));
}) 

saveBtn10.addEventListener('click', function(event) {
    event.preventDefault();
    let text10 = document.querySelector('#hour10').value;
    localStorage.setItem('text10',JSON.stringify(text10));
}) 

saveBtn11.addEventListener('click', function(event) {
    event.preventDefault();
    let text11 = document.querySelector('#hour11').value;
    localStorage.setItem('text11',JSON.stringify(text11));
}) 

saveBtn12.addEventListener('click', function(event) {
    event.preventDefault();
    let text12 = document.querySelector('#hour12').value;
    localStorage.setItem('text12',JSON.stringify(text12));
}) 

saveBtn1.addEventListener('click', function(event) {
    event.preventDefault();
    let text1 = document.querySelector('#hour1').value;
    localStorage.setItem('text1',JSON.stringify(text1));
}) 

saveBtn2.addEventListener('click', function(event) {
    event.preventDefault();
    let text2 = document.querySelector('#hour2').value;
    localStorage.setItem('text2',JSON.stringify(text2));
}) 

saveBtn3.addEventListener('click', function(event) {
    event.preventDefault();
    let text3 = document.querySelector('#hour3').value;
    localStorage.setItem('text3',JSON.stringify(text3));
}) 

saveBtn4.addEventListener('click', function(event) {
    event.preventDefault();
    let text4 = document.querySelector('#hour4').value;
    localStorage.setItem('text4',JSON.stringify(text4));
}) 

saveBtn5.addEventListener('click', function(event) {
    event.preventDefault();
    let text5 = document.querySelector('#hour5').value;
    localStorage.setItem('text5',JSON.stringify(text5));
}) 

// Initializing functions 
init9()
init10()
init11()
init12()
init1()
init2()
init3()
init4()
init5()