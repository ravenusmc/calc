//This function will return the convert weight to the user. It will also do some input validation 
//to ensure that only the correct input is entered. 
document.querySelector('#weight_value').addEventListener('click', function(){

  let target = Number(document.querySelector('#weight').value);
  //debugger;

  if (document.getElementById("lbs").checked == true){

    if (target == ''){
      alert("A value must be entered!");
      location.reload();
    }else if(target < 0){
      alert('Weight must be a positive value');
      location.reload();
    }else {
      let converted_value = target * 0.45359237;
      if (isNaN(converted_value)){
        alert('Please enter in a number!');
        location.reload();
      }else {
        converted_value = (converted_value).toFixed(2);
        document.querySelector('#results_area').textContent = converted_value + ' kilograms';
      } 
    }
  }else if (document.getElementById("kgs").checked == true) {
    if (target == ''){
      alert("A value must be entered!");
      location.reload();
    }else if(target < 0){
      alert('Weight must be a positive value');
      location.reload();
    }else {
      let converted_value = target * 2.20462;
      if (isNaN(converted_value)){
        alert('Please enter in a number!');
        location.reload();
      }else {
        converted_value = (converted_value).toFixed(2);
        document.querySelector('#results_area').textContent = converted_value + ' kilograms';
      } 
    }
  } 
})


