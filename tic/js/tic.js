var player = 'one';


// document.querySelector('.button').addEventListener('click', function(){

//     document.querySelector('.player-' + player).textContent ='Move';

//     if (player == 'one'){
//         document.querySelector(".one_square").addEventListener('click', function(){
//             document.querySelector('.one_square').textContent = 'X';
//         });
//     }else {
//         document.querySelector(".one_square").addEventListener('click', function(){
//             document.querySelector('.one_square').textContent = 'O';
//         });
//     }
// });

document.querySelector('#next').addEventListener('click', function(){
    console.log(player);
    if (player == 'one'){
        player = 'two';
    }else {
        player = 'one';
    }
})

document.querySelector(".one_square").addEventListener('click', function(){
    if (player == 'one'){
        document.querySelector('.one_square').textContent = 'X';
    }else{
        document.querySelector('.one_square').textContent = 'O';
    }
    
});




function playerOne(){
    document.querySelector('.p_one').classList.add('current_player');


    document.querySelector(".two_square").addEventListener('click', function(){
        document.querySelector('.two_square').textContent = 'X';

    });
    document.querySelector(".three_square").addEventListener('click', function(){
        document.querySelector('.three_square').textContent = 'X';
    });
}

function playerTwo(){
    document.querySelector(".one_square").addEventListener('click', function(){
        document.querySelector('.one_square').textContent = 'O';
    });
    document.querySelector(".two_square").addEventListener('click', function(){
        document.querySelector('.two_square').textContent = 'O';
    });
    document.querySelector(".three_square").addEventListener('click', function(){
        document.querySelector('.three_square').textContent = 'O';
    });
}


// function squareOne(player){
//     document.querySelector(".one_square").addEventListener('click', function(){
//         if (player == 'one'){
//             document.querySelector('.one_square').textContent = 'X';
//         }else{
//             document.querySelector('.one_square').textContent = 'O';
//         }
//     })
// }

////////////////////////////////////

// var player = 'one';
// var game_array = [0,1,2,3,4,5,6,7,8]

// //Functions for clicking on the squares
// function change_one(player, game_array){

//     // debugger;
//     if (player == 'one'){
//         document.querySelector('.one_square').textContent = 'X'; 
//         game_array[0] = 'X';  
//     }else {
//         document.querySelector('.one_square').textContent = 'O';
//         game_array[0] = 'O'; 
//     }   

//     return game_array;  
// }

// function change_two(player, game_array){

//     // debugger;
//     if (player == 'one'){
//         document.querySelector('.two_square').textContent = 'X'; 
//         game_array[1] = 'X';  
//     }else {
//         document.querySelector('.two_square').textContent = 'O';
//         game_array[1] = 'O'; 
//     }   

//     return game_array;  
// }

// function change_three(player, game_array){

//     // debugger;
//     if (player == 'one'){
//         document.querySelector('.three_square').textContent = 'X'; 
//         game_array[2] = 'X';  
//     }else {
//         document.querySelector('.three_square').textContent = 'O';
//         game_array[2] = 'O'; 
//     }   

//     return game_array;  
// }

// function check(game_array){
//     console.log()
//     if (game_array[0] = 'X' && game_array[1] == 'X' && game_array[2] == 'X' ){
//         console.log('Player One Wins!!!');
//     }
// }



// window.onload = init;




// document.querySelector("#square-one").addEventListener('click', function(){
//     document.querySelector('.one_square').textContent = 'X';   
// });

// debugger;