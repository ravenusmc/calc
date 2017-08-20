//This file will contain all of my code for the hangman game 

//Global variables for use in the program. 
var gameStart = false;
var word; 
var wrong_count = 0;
var right_count = 0; 
var wordLength  = 0;
var wordCount = 0;

//This function will start the game and choose a word at random. 
function chooseWord(){

  wordList = ["Mike", "desk", "table", "book"];

  random_value = Math.floor((Math.random() * 3) + 1);

  alert('Game Started! Word Choosen! Save the man!');

  word = wordList[random_value];

  wordCount = word.length;

  //This variable will ensure that the user starts the game.
  gameStart = true;
}

//This function will reset the game if clicked.
function reset(){
  location.reload();
}


//This function will control what the user enters into the program. 
function getValue(word){

  if (gameStart){

    alert(word)

    //These array's will hold all of the positions for where a letter will appear
    //When it is the wrong answer. The wrong_count will increment by one 
    wrong = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    right = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten' ];

    let target = document.querySelector('#guessValue').value;

    if (word.includes(target)){
      alert('Right Guess!');
      document.getElementById(right[right_count] + "_correct").innerHTML = target;
      right_count += 1;
    }else {
      alert('Wrong Guess!')
      document.getElementById(wrong[wrong_count]).innerHTML = target;
      wrong_count += 1;
      wordLength += 1;
    }
  }else {
    alert('You must hit game start button!');
  }
  
}




//Scrap Code 

//This function will control what the user enters into the program. 
// document.querySelector('#enteredValue').addEventListener('click', function(){

//   let target = document.querySelector('#guessValue').value;

//   count = 0

//   if (target !=  'b'){
//     document.getElementById("one").innerHTML = target;
//   }

//   alert(count);
//   count += 1;

// })

  // debugger;
  // if (target != 'a'){
  //   document.getElementById("one").innerHTML = target;
  // }else if (target != 'b'){
  //   document.getElementById("two").innerHTML = target;
  // }

