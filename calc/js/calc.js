// document.querySelector('.seven').addEventListener('click', function(){
//    var value_one = document.querySelector('.seven').textContent;
//    document.querySelector('.input_screen').textContent = value_one;
// })

var numArray = []
var nums = []

//This array will hold all the numbers each time the user pushes an operand. 
var numberContainer = [];


document.querySelector('#add_btn').addEventListener('click', function(){
  test = numArray.join('');
  test = Number(test);
  numberContainer.push(test);
  // for(var i = 0; i < numArray.length; i++){
  //   num = numArray[i];
  //   num = Number(num);
  //   nums.push(num);
  // }
  //clearing out the numArray so that the program does not crash. 
  numArray = [];
});

document.querySelector('#eql_btn').addEventListener('click', function(){
  total = add(numberContainer);
  document.querySelector('.input_screen').textContent = total;
})

function seven(){
  var value = document.querySelector('.seven').textContent;
  value = Number(value)
  numArray.push(value);
  //This line of code will display the values on the screen without a comma. 
  test = numArray.join('');
  document.querySelector('.input_screen').textContent = test;
}

function add() {
  total = 0
  for (i = 0; i < numberContainer.length; i++){
    total = numberContainer[i] + total;
  }
  return total;
}



function eight(){
  var value = document.querySelector('.eight').textContent;
  value = Number(value)
  numArray.push(value);
  // numArray = numArray.join('');
  document.querySelector('.input_screen').textContent = numArray;
}

//Place numbers in an array and then display them????

// I have to make the numbers become one number in an array-combine them and then display that. 

//Join the values in an array after operator button is pushed. 



//set up a first number that does everything then switch over to a second number
