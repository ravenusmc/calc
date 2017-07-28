document.querySelector('#weight_value').addEventListener('click', function(){

  let target = Number(document.querySelector('#weight').value);

  if (target == ''){
    alert("A value must be entered!");
  }else {
    //debugger;
    let converted_value = target * 0.45359237;
    if (isNaN(converted_value)){
      alert('Please enter in a number!');
    }else {
      document.querySelector('#results_area').textContent = converted_value + ' kilograms';
    }
    
  }


})


