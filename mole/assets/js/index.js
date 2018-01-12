
function change(){
  document.getElementById("one").style.backgroundImage = "url('./assets/images/mole_out.jpg')";
}


function switchPic(){  
  setTimeout(function(){
    change();
  }, 1000);
};



//This function will repeat 
// setInterval(function(){ alert("Hello"); }, 3000);