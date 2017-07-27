document.querySelector('#weight_value').addEventListener('click', function(){
  let target = document.querySelector('#weight').value;

  document.querySelector('#results_area').textContent = target;
})


