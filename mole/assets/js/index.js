//This file holds all of the javascript code for the project. 

//This function will get the random number
function getPosition(position, positions) {
  
  let randomNumber = Math.floor(Math.random() * 6);

  position = positions[randomNumber];

  return position;
}

//This function will make the moles appear up and down. 
function change(){

  let position = '';

  const positions = ['one', 'two', 'three', 'four', 'five', 'six'];

  position = getPosition(position, positions);

  if (document.getElementById(position).classList.contains('down') ){
    document.getElementById(position).classList.remove('down');
    document.getElementById(position).classList.add('up');
  }else {
    document.getElementById(position).classList.remove('up');
    document.getElementById(position).classList.add('down');
  }

}

//This function starts the game when the button is pressed. 
function switchPic(){   

  setInterval(function(){
    change();
  }, 200);

};

/*
// The functions below all deal with updating the score. I will say that I should have used a 
// Global variable to get the positions value out of the array. That way, I would not have had to 
// create so many functions! This is a very bad example of WET code!!!! (Please see futher comments below)
*/
function hitOne() {

  let score = Number(document.getElementById('score').innerHTML);

  if(document.getElementById("one").className == "up"){

    score += 1;
    document.getElementById('score').innerHTML = score;
    document.getElementById("one").classList.remove('up');
    document.getElementById("one").classList.add('down');
  } 
}

function hitTwo() {

  let score = Number(document.getElementById('score').innerHTML);

  if(document.getElementById("two").className == "up"){

    score += 1;
    document.getElementById('score').innerHTML = score;
    document.getElementById("two").classList.remove('up');
    document.getElementById("two").classList.add('down');
  } 
}

function hitThree() {

  let score = Number(document.getElementById('score').innerHTML);

  if(document.getElementById("three").className == "up"){

    score += 1;
    document.getElementById('score').innerHTML = score;
    document.getElementById("three").classList.remove('up');
    document.getElementById("three").classList.add('down');
  } 
}

function hitFour() {

  let score = Number(document.getElementById('score').innerHTML);

  if(document.getElementById("four").className == "up"){

    score += 1;
    document.getElementById('score').innerHTML = score;
    document.getElementById("four").classList.remove('up');
    document.getElementById("four").classList.add('down');
  } 
}

function hitFive() {

  let score = Number(document.getElementById('score').innerHTML);

  if(document.getElementById("five").className == "up"){

    score += 1;
    document.getElementById('score').innerHTML = score;
    document.getElementById("five").classList.remove('up');
    document.getElementById("five").classList.add('down');
  } 
}

function hitSix() {

  let score = Number(document.getElementById('score').innerHTML);

  if(document.getElementById("six").className == "up"){

    score += 1;
    document.getElementById('score').innerHTML = score;
    document.getElementById("six").classList.remove('up');
    document.getElementById("six").classList.add('down');
  } 
}


//This is some of the code that I was trying to use to get rid of all the functions above that used the same code 
//over and over again. The main issue that I have is that the position, the spot in the array must be synced with 
//both the switchPic and hit functions. I tried doing this with a global variable and it somewhat worked but the 
//switch position kept changing to fast.

// let position  = '';
// const positions = ['one', 'two', 'three', 'four', 'five', 'six'];
// position = getPosition(position, positions);


// window.load = setInterval(function(){
//   position = getPosition(position, positions);
// }, 1000);
