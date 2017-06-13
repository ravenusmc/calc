//Creating global variables
var numArray = []
var multiply_it, add_it, subtract_it, divide_it;
multiply_it = false;
add_it = false;
subtract_it = false;
divide_it = false;
//This array will hold all the numbers each time the user pushes an operand. 
var numberContainer = [];

//The below functions are for Operands. Comments below are the same for all operand functions. 

//First listening for the user to click the specific operand button
document.querySelector('#add_btn').addEventListener('click', function(){
  //The specific operand used is set to true
  add_it = true
  //This conditional statement will go through and do the math if the user hit one of the operands. 
  if (multiply_it){
    multiply_it = false;
    displayNum = numArray.join('');
    displayNum = Number(displayNum);
    numberContainer.push(displayNum);
    total = multiply(numberContainer);
    numberContainer = [];
    numberContainer.push(total);
    numArray = [];
  }else if (divide_it) {
    divide_it = false;
    displayNum = numArray.join('');
    displayNum = Number(displayNum);
    numberContainer.push(displayNum);
    total = divide(numberContainer);
    numberContainer = [];
    numberContainer.push(total);
    numArray = [];
  }else if (subtract_it) {
    subtract_it = false;
    displayNum = numArray.join('');
    displayNum = Number(displayNum);
    numberContainer.push(displayNum);
    total = subtract(numberContainer);
    numberContainer = [];
    numberContainer.push(total);
    numArray = [];
  }else {
    //The numbers that are entered in the screen are all joined in an array called displayNum
    displayNum = numArray.join('');
    //I ensure that the number displayNum is in fact a number
    displayNum = Number(displayNum);
    //The number is then pushed into a numberContainer array which will hold the values of the numbers
    //that will haev actions taken on them. 
    numberContainer.push(displayNum);
    //clearing out the numArray so that the program does not crash. 
    numArray = [];
  }

});

document.querySelector('#mul_btn').addEventListener('click', function(){
  multiply_it = true;
  if (add_it){
    add_it = false;
    displayNum = numArray.join('');
    displayNum = Number(displayNum);
    numberContainer.push(displayNum);
    total = add(numberContainer);
    numberContainer = [];
    numberContainer.push(total);
    document.querySelector('.input_screen').textContent = total;
    numArray = [];
  }else if (divide_it) {
    divide_it = false;
    displayNum = numArray.join('');
    displayNum = Number(displayNum);
    numberContainer.push(displayNum);
    total = divide(numberContainer);
    numberContainer = [];
    numberContainer.push(total);
    numArray = [];
  }else if (subtract_it) {
    subtract_it = false;
    displayNum = numArray.join('');
    displayNum = Number(displayNum);
    numberContainer.push(displayNum);
    total = subtract(numberContainer);
    numberContainer = [];
    numberContainer.push(total);
    numArray = [];
  }else {
    displayNum = numArray.join('');
    displayNum = Number(displayNum);
    numberContainer.push(displayNum);
    numArray = [];
  }
})

document.querySelector('#div_btn').addEventListener('click', function(){
  divide_it = true;
  if (add_it){
    add_it = false;
    displayNum = numArray.join('');
    displayNum = Number(displayNum);
    numberContainer.push(displayNum);
    total = add(numberContainer);
    numberContainer = [];
    numberContainer.push(total);
    document.querySelector('.input_screen').textContent = total;
    numArray = [];
  }else if (multiply_it){
    multiply_it = false;
    displayNum = numArray.join('');
    displayNum = Number(displayNum);
    numberContainer.push(displayNum);
    total = multiply(numberContainer);
    numberContainer = [];
    numberContainer.push(total);
    numArray = [];
  }else if (subtract_it) {
    subtract_it = false;
    displayNum = numArray.join('');
    displayNum = Number(displayNum);
    numberContainer.push(displayNum);
    total = subtract(numberContainer);
    numberContainer = [];
    numberContainer.push(total);
    numArray = [];
  }else{
    displayNum = numArray.join('');
    displayNum = Number(displayNum);
    numberContainer.push(displayNum);
    numArray = [];
  }

})

document.querySelector('#sub_btn').addEventListener('click', function(){
  subtract_it = true;
  if (add_it){
    add_it = false;
    displayNum = numArray.join('');
    displayNum = Number(displayNum);
    numberContainer.push(displayNum);
    total = add(numberContainer);
    numberContainer = [];
    numberContainer.push(total);
    document.querySelector('.input_screen').textContent = total;
    numArray = [];
  }else if (multiply_it){
    multiply_it = false;
    displayNum = numArray.join('');
    displayNum = Number(displayNum);
    numberContainer.push(displayNum);
    total = multiply(numberContainer);
    numberContainer = [];
    numberContainer.push(total);
    numArray = [];
  }else if (divide_it) {
    divide_it = false;
    displayNum = numArray.join('');
    displayNum = Number(displayNum);
    numberContainer.push(displayNum);
    total = divide(numberContainer);
    numberContainer = [];
    numberContainer.push(total);
    numArray = [];
  }else{
    displayNum = numArray.join('');
    displayNum = Number(displayNum);
    numberContainer.push(displayNum);
    numArray = [];
  }

})

//The actions here cover what happens when the user hits the equal button. 
document.querySelector('#eql_btn').addEventListener('click', function(){
  //I again join the numbers that are in the numArray together. 
  displayNum = numArray.join('');
  //Ensure that displayNum is in fact a number
  displayNum = Number(displayNum);
  //Push display number into the numberContainer array which will hold all of the numbers which will have 
  //an action taken on them.
  numberContainer.push(displayNum);
  //Here I use the boolean's from each operand action to determine what the program will do when the user 
  //hits the equal button.
  if (multiply_it){
    console.log(numberContainer)
    total = multiply(numberContainer);
  }else if (add_it){
    total = add(numberContainer);
  }else if (divide_it){
    total = divide(numberContainer);
  }else {
    total = subtract(numberContainer);
  }
  //The screen presents the total to the user. 
  document.querySelector('.input_screen').textContent = total;
})
///////// END OPERAND ACTIONS ////////////////////



//////// START OF BUTTON FUNCTIONS //////////////////


//All the code for the button functions here. I will right comments in the first one but the rest are the same. 
function zero(){
  //pulling the value that the button represents
  var value = document.querySelector('.zero').textContent;
  //Ensuring that the value is a number.
  value = Number(value)
  //pushing that value into the numArray. I do this so that the user may enter multiple values of the same 
  //number. 
  numArray.push(value);
  //This line of code will display the values on the screen without a comma. 
  displayNum = numArray.join('');
  //The displayNum is then displayed. 
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


function add() {
  total = 0
  for (i = 0; i < numberContainer.length; i++){
    total = numberContainer[i] + total; 
  }
  return total;
};

function multiply() {
  total = 1
  for (i = 0; i < numberContainer.length; i++){
    total = numberContainer[i] * total; 
  }
  return total;
};

function divide() {
  return numberContainer[0] / numberContainer[1];
};

function subtract() {
  return numberContainer[0] - numberContainer[1];
}

//Here I clear the screen and reset all of the values.
document.querySelector('.clear').addEventListener('click', function(){
  numberContainer = [];
  numArray = [];
  multiply_it = false;
  add_it = false;
  subtract_it = false;
  divide_it = false;
  document.querySelector('.input_screen').textContent = '';
});




