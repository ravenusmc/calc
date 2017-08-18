//This file will contain all of my code for the hangman game 

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

//This function will control what the user enters into the program. 
function getValue(){

  let target = document.querySelector('#guessValue').value;

  // debugger;
  if (target != 'a'){
    document.getElementById("one").innerHTML = target;
  }else if (target != 'b'){
    document.getElementById("two").innerHTML = target;
  }
  


}

