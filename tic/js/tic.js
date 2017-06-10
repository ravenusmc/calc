var player = 'one';
var game_array = [0,1,2,3,4,5,6,7,8]


document.querySelector(".one_square").addEventListener('click', function(){
    if (player == 'one'){
        document.querySelector('.one_square').textContent = 'X';
        game_array[0] = 'X';
    }else{
        document.querySelector('.one_square').textContent = 'O';
        game_array[0] = 'O'; 
    }
    nextPlayer();
    check();
    
});

document.querySelector(".two_square").addEventListener('click', function(){
    if (player == 'one'){
        document.querySelector('.two_square').textContent = 'X';
        game_array[1] = 'X';
    }else{
        document.querySelector('.two_square').textContent = 'O';
        game_array[1] = 'O';
    }
    nextPlayer();
    check();
    
});

document.querySelector(".three_square").addEventListener('click', function(){
    if (player == 'one'){
        document.querySelector('.three_square').textContent = 'X';
        game_array[2] = 'X';
    }else{
        document.querySelector('.three_square').textContent = 'O';
        game_array[2] = 'O';
    }
    nextPlayer();
    check();
});

document.querySelector(".four_square").addEventListener('click', function(){
    if (player == 'one'){
        document.querySelector('.four_square').textContent = 'X';
        game_array[3] = 'X';
    }else{
        document.querySelector('.four_square').textContent = 'O';
        game_array[3] = 'O';
    }
    nextPlayer();
    check();
});

document.querySelector(".five_square").addEventListener('click', function(){
    if (player == 'one'){
        document.querySelector('.five_square').textContent = 'X';
        game_array[4] = 'X';
    }else{
        document.querySelector('.five_square').textContent = 'O';
        game_array[4] = 'O';
    }
    nextPlayer();
    check();
});

document.querySelector(".six_square").addEventListener('click', function(){
    if (player == 'one'){
        document.querySelector('.six_square').textContent = 'X';
        game_array[5] = 'X';
    }else{
        document.querySelector('.six_square').textContent = 'O';
        game_array[5] = 'O';
    }
    nextPlayer();
    check();
});

document.querySelector(".seven_square").addEventListener('click', function(){
    if (player == 'one'){
        document.querySelector('.seven_square').textContent = 'X';
        game_array[6] = 'X';
    }else{
        document.querySelector('.seven_square').textContent = 'O';
        game_array[6] = 'O';
    }
    nextPlayer();
    check();
});

document.querySelector(".eight_square").addEventListener('click', function(){
    if (player == 'one'){
        document.querySelector('.eight_square').textContent = 'X';
        game_array[7] = 'X';
    }else{
        document.querySelector('.eight_square').textContent = 'O';
        game_array[7] = 'O';
    }
    nextPlayer();
    check();
});

document.querySelector(".nine_square").addEventListener('click', function(){
    if (player == 'one'){
        document.querySelector('.nine_square').textContent = 'X';
        game_array[8] = 'X';
    }else{
        document.querySelector('.nine_square').textContent = 'O';
        game_array[8] = 'O';
    }
    nextPlayer();
    check();
});


// 0,1,2,
// 3,4,5,
// 6,7,8

function check(){
    if ( (game_array[0] == 'X' && game_array[1] == 'X' && game_array[2] == 'X') ||  
        (game_array[3] == 'X' && game_array[4] == 'X' && game_array[5] == 'X') ||
        (game_array[6] == 'X' && game_array[7] == 'X' && game_array[8] == 'X') ||
        (game_array[0] == 'X' && game_array[3] == 'X' && game_array[6] == 'X')
        ){
        alert('Player One Wins!!!');
    }
}

function nextPlayer(){
    if (player == 'one'){
        player = 'two';
        document.querySelector('.p_two').classList.add('current_player');
        document.querySelector('.p_one').classList.remove('current_player');
        document.querySelector('.p_one').classList.add('player_label');

    }else {
        player = 'one';
        document.querySelector('.p_one').classList.add('current_player');
        document.querySelector('.p_two').classList.remove('current_player');
        document.querySelector('.p_two').classList.add('player_label');
    }
}




// debugger;