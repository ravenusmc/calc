
function change(){


  let target = document.getElementById("one");


  if (document.getElementById("one").classList.contains('down') ){
    document.getElementById("one").classList.remove('down');
    document.getElementById("one").classList.add('up');
  }else {
    document.getElementById("one").classList.remove('up');
    document.getElementById("one").classList.add('down');
  }


  
}

function switchPic(){ 

  setInterval(function(){
    change();
  }, 1000);

};

//This function will repeat 
// setInterval(function(){ alert("Hello"); }, 3000);



// function changeTwo() {

//   let targetTwo = document.getElementById('two');

//   if (targetTwo.style.color == 'black'){
//     document.getElementById('two').src = 'https://source.unsplash.com/AZMmUy2qL6A/255x200';
//     document.getElementById('headingTwo').innerHTML = 'A Group of Friends';
//     targetTwo.style.color = 'blue';
//   }else{
//     document.getElementById('two').src = "https://source.unsplash.com/K2u71wv2eI4/255x200";
//     document.getElementById('headingTwo').innerHTML = 'A Lone individual...';
//     targetTwo.style.color = 'black';
//   }
// }

// <div class="card">
//   <img id='two' onclick='changeTwo()' style="color:black;" class="card-img-top" src="https://source.unsplash.com/K2u71wv2eI4/255x200" alt="Card image cap">
//     <div class="card-block">
//       <h4 id='headingTwo' class="card-title">A Lone individual...</h4>
//       <p id="two-paragraph"class="card-text">He who wonders about his journey in life...</p>
//     </div>
// </div>


  // if (target.style.backgroundImage = "url('./assets/images/mole_in_hole')" ){
  //   document.getElementById("one").style.backgroundImage = "url('./assets/images/mole_out.jpg')";
  //   target.style.color = 'green';
  // }else {
  //   document.getElementById("one").style.backgroundImage = "url('./assets/images/mole_in_hole.jpg')";
  //   target.style.color = 'red';
  // }

    if (target.style.backgroundImage == "url(assets/images/mole_in_hole.jpg)" ){
    document.getElementById("one").style.backgroundImage = "url(assets/images/mole_in_hole.jpg)";
  }else {
    document.getElementById("one").style.backgroundImage = "url(assets/images/mole_out.jpg)";
  }