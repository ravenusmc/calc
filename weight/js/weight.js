document.querySelector('#weight_value').addEventListener('click', function(){
  let target = document.querySelector('#weight').value;

  if (target == ''){
    alert('if');
    alert("A value must be entered!");
  }
  let converted_value = target * 0.45359237
  document.querySelector('#results_area').textContent = converted_value + ' kilograms';

})


