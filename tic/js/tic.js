document.querySelector("#start").addEventListener('click', function(){
    alert('Player One Start!');
    var player = 'one';
    var game_over = false;

    while (game_over == false ){

        playerOne(player);
        
        // document.querySelector('.one_square').addEventListener('click', function(){
        // alert('test');
        // })
        game_over = true;
    }

});

function playerOne(player){
    document.querySelector('#square-' + player).addEventListener('click', function(){
        document.querySelector('.one_square').textContent = 'T'; 
    });
}

////////////////////////////////////

var player = 'one';
var game_array = [0,1,2,3,4,5,6,7,8]

//Functions for clicking on the squares
function change_one(player, game_array){

    // debugger;
    if (player == 'one'){
        document.querySelector('.one_square').textContent = 'X'; 
        game_array[0] = 'X';  
    }else {
        document.querySelector('.one_square').textContent = 'O';
        game_array[0] = 'O'; 
    }   

    return game_array;  
}

function change_two(player, game_array){

    // debugger;
    if (player == 'one'){
        document.querySelector('.two_square').textContent = 'X'; 
        game_array[1] = 'X';  
    }else {
        document.querySelector('.two_square').textContent = 'O';
        game_array[1] = 'O'; 
    }   

    return game_array;  
}

function change_three(player, game_array){

    // debugger;
    if (player == 'one'){
        document.querySelector('.three_square').textContent = 'X'; 
        game_array[2] = 'X';  
    }else {
        document.querySelector('.three_square').textContent = 'O';
        game_array[2] = 'O'; 
    }   

    return game_array;  
}

function check(game_array){
    console.log()
    if (game_array[0] = 'X' && game_array[1] == 'X' && game_array[2] == 'X' ){
        console.log('Player One Wins!!!');
    }
}



// window.onload = init;




// document.querySelector("#square-one").addEventListener('click', function(){
//     document.querySelector('.one_square').textContent = 'X';   
// });

// debugger;