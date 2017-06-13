//Creating global variables
var numArray = []
var nums = []
var multiply_it, add_it, subtract, divide;
multiply_it = false;
add_it = false;
subtract = false;
divide = false;

//This array will hold all the numbers each time the user pushes an operand. 
var numberContainer = [];

//The below functions are for Operands 

document.querySelector('#add_btn').addEventListener('click', function(){
  add_it = true
  displayNum = numArray.join('');
  displayNum = Number(displayNum);
  numberContainer.push(displayNum);

  //clearing out the numArray so that the program does not crash. 
  numArray = [];
});

document.querySelector('#mul_btn').addEventListener('click', function(){
  multiply_it = true;
  displayNum = numArray.join('');
  displayNum = Number(displayNum);
  numberContainer.push(displayNum);
  //clearing out the numArray so that the program does not crash. 
  numArray = [];
})

document.querySelector('#eql_btn').addEventListener('click', function(){
  displayNum = numArray.join('');
  displayNum = Number(displayNum);
  numberContainer.push(displayNum);
  if (multiply_it == true){
    total = multiply(numberContainer);
  }else if (add_it == true){
    total = add(numberContainer);
  }
  document.querySelector('.input_screen').textContent = total;
})


//All the code for the button functions here. I will right comments in the first one but the rest are the same. 

function zero(){
  var value = document.querySelector('.zero').textContent;
  value = Number(value)
  numArray.push(value);
  //This line of code will display the values on the screen without a comma. 
  displayNum = numArray.join('');
  document.querySelector('.input_screen').textContent = displayNum;
}

function one(){
  var value = document.querySelector('.one').textContent;
  value = Number(value)
  numArray.push(value);
  //This line of code will display the values on the screen without a comma. 
  displayNum = numArray.join('');
  document.querySelector('.input_screen').textContent = displayNum;
}

function two(){
  var value = document.querySelector('.two').textContent;
  value = Number(value)
  numArray.push(value);
  //This line of code will display the values on the screen without a comma. 
  displayNum = numArray.join('');
  document.querySelector('.input_screen').textContent = displayNum;
}

function three(){
  var value = document.querySelector('.three').textContent;
  value = Number(value)
  numArray.push(value);
  //This line of code will display the values on the screen without a comma. 
  displayNum = numArray.join('');
  document.querySelector('.input_screen').textContent = displayNum;
}

function four(){
  var value = document.querySelector('.four').textContent;
  value = Number(value)
  numArray.push(value);
  //This line of code will display the values on the screen without a comma. 
  displayNum = numArray.join('');
  document.querySelector('.input_screen').textContent = displayNum;
}

function five(){
  var value = document.querySelector('.five').textContent;
  value = Number(value)
  numArray.push(value);
  //This line of code will display the values on the screen without a comma. 
  displayNum = numArray.join('');
  document.querySelector('.input_screen').textContent = displayNum;
}

function six(){
  var value = document.querySelector('.six').textContent;
  value = Number(value)
  numArray.push(value);
  //This line of code will display the values on the screen without a comma. 
  displayNum = numArray.join('');
  document.querySelector('.input_screen').textContent = displayNum;
}


function seven(){
  var value = document.querySelector('.seven').textContent;
  value = Number(value)
  numArray.push(value);
  //This line of code will display the values on the screen without a comma. 
  displayNum = numArray.join('');
  document.querySelector('.input_screen').textContent = displayNum;
}

function eight(){
  var value = document.querySelector('.eight').textContent;
  value = Number(value)
  numArray.push(value);
  //This line of code will display the values on the screen without a comma. 
  displayNum = numArray.join('');
  document.querySelector('.input_screen').textContent = displayNum;
}

function nine(){
  var value = document.querySelector('.nine').textContent;
  value = Number(value)
  numArray.push(value);
  //This line of code will display the values on the screen without a comma. 
  displayNum = numArray.join('');
  document.querySelector('.input_screen').textContent = displayNum;
}

//Problem each time I click the seven function I fire it off which creates an extra 7.

function add() {
  total = 0
  for (i = 0; i < numberContainer.length; i++){
    total = numberContainer[i] + total; 
  }
  return total;
}

function multiply() {
  total = 1
  for (i = 0; i < numberContainer.length; i++){
    total = numberContainer[i] * total; 
  }
  return total;
}


