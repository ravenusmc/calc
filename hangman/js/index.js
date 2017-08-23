//This file will contain all of my code for the hangman game 

//Global variables for use in the program. 
var gameStart = false;
var word; 
var wrong_count = 0;
var right_count = 0; 
var wordLength  = 0;
var wordCount = 6;
var bodyPartCount = 0;

//This function will start the game and choose a word at random. 
function chooseWord(){

  //This is only to alert the user that the game has started. 
  alert('Game Started! Word Choosen! Save the man!');

  //This array contains the words that will be used in the program. They are all 6 letter 
  //words because the hanging man has six body parts. 
  wordList = ["Mike", "abroad", "active", "afraid", "eleven", "lawyer", "prison"];

  //This variable here will be what will choose a random value from the wordList array.
  random_value = Math.floor((Math.random() * 6) + 1);

  alert(random_value);

  //I am using the random_value to pull a word out of the array. 
  word = wordList[random_value];

  //I am only showing the word in production mode. 
  alert(word)

  //DON'T BELIEVE I NEED THIS LINE BECAUSE ALL MY WORDS ARE THE SAME LENGTH. 
  // wordCount = word.length;

  //This variable will ensure that the user starts the game.
  gameStart = true;
}

//This function will reset the game if clicked.
function reset(){
  //This code will reload the page. That is how my reset button works! 
  location.reload();
}


//This function will control what the user enters into the program. 
function getValue(word){

  if (gameStart){

    wordArray = word.split("");

    //These array's will hold all of the positions for where a letter will appear
    //When it is the wrong answer. The wrong_count will increment by one 
    wrong = ['one', 'two', 'three', 'four', 'five', 'six'];
    right = ['one', 'two', 'three', 'four', 'five', 'six'];

    //This array will hold all of the body parts for the hanging man. I will use the values in 
    //this array to change the id of a body part so that it appears on the screen 
    //when the player makes a mistake. 
    bodyParts = ['head', 'body', 'l_arm', 'r_arm', 'r_leg', 'l_leg'];

    //This is getting the value that the user enters. 
    let target = document.querySelector('#guessValue').value;

    if (word.includes(target)){

      //Here I just let the user know that they guessed a right letter. 
      alert('Right Guess!');

      //I look for the index of the letter in the array. 
      //letterSpot = wordArray.indexOf(target);

      //I use those for look to not only place values on the screen if they are in the array but 
      //also to place values if a word has a duplicate. 
      for (var i = 0; i < wordArray.length; i++){
        if (wordArray[i] == target){
          document.getElementById(right[i] + "_correct").innerHTML = target;
        }
      }
      
      //right_count += 1;

    }else {
      alert('Wrong Guess!')
      document.getElementById(wrong[wrong_count]).innerHTML = target;
      //This line I make one of the body parts appear on the screen. 
      document.getElementById(bodyParts[bodyPartCount]).setAttribute("style", "display: inline;");
      wrong_count += 1;
      wordLength += 1;
      bodyPartCount += 1; 
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


// usedLetters = [];

// usedLetters.push(letterSpot);

// if (usedLetters.includes(letterSpot)){
//   alert('you have used that value!');
// }

//I then user the variable letterSpot to place the wrong letter in the correct location. 
// document.getElementById(right[letterSpot] + "_correct").innerHTML = target;

