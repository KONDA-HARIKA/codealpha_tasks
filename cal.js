let screen =
document.getElementById("screen");

function addValue(value){

screen.value += value;

}

function clearScreen(){

screen.value="";

}

function removeLast(){

screen.value=
screen.value.slice(0,-1);

}

function calculate(){

try{

screen.value=
eval(screen.value);

}

catch{

screen.value=
"Error";

}

}


// Keyboard Support

document.addEventListener(
"keydown",
function(event){

let key = event.key;

if(
(key>='0' && key<='9')
|| key==='+'
|| key==='-'
|| key==='*'
|| key==='/'
|| key==='.'
){

addValue(key);

}

else if(key==="Enter"){

calculate();

}

else if(
key==="Backspace"
){

removeLast();

}

else if(
key==="Escape"
){

clearScreen();

}

});