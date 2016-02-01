'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

// load sass manifest
require('../styles/index.scss');

let playGame = function(){
  let currentPlayer = 'X';
  let changePlayer = function(){
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  };

  let checkWinner = function(player){
    //top row
    if ($('#board').find('#1').text() === player
    && $('#board').find('#2').text() === player
    && $('#board').find('#3').text() === player){
      alert(player + ' is the winner!');
      resetBoard();
    }
    //middle row
    if ($('#board').find('#4').text() === player
    && $('#board').find('#5').text() === player
    && $('#board').find('#6').text() === player){
      alert(player + ' is the winner!');
      resetBoard();
    }
    //bottom row
    if ($('#board').find('#7').text() === player
    && $('#board').find('#8').text() === player
    && $('#board').find('#9').text() === player){
      alert(player + ' is the winner!');
      resetBoard();
    }
    //left column
    if ($('#board').find('#1').text() === player
    && $('#board').find('#4').text() === player
    && $('#board').find('#7').text() === player){
      alert(player + ' is the winner!');
      resetBoard();
    }
    //middle column
    if ($('#board').find('#2').text() === player
    && $('#board').find('#5').text() === player
    && $('#board').find('#8').text() === player){
      alert(player + ' is the winner!');
      resetBoard();
    }
    //right column
    if ($('#board').find('#3').text() === player
    && $('#board').find('#6').text() === player
    && $('#board').find('#9').text() === player){
      alert(player + ' is the winner!');
      resetBoard();
    }
    //left diagonal
    if ($('#board').find('#1').text() === player
    && $('#board').find('#5').text() === player
    && $('#board').find('#9').text() === player){
      alert(player + ' is the winner!');
      resetBoard();
    }
    //right diagonal
    if ($('#board').find('#3').text() === player
    && $('#board').find('#5').text() === player
    && $('#board').find('#7').text() === player){
      alert(player + ' is the winner!');
      resetBoard();
    }

  };

  //play an individual turn
  $('#board').find('td').on('click', function(){
    $(this).text(currentPlayer);
    checkWinner(currentPlayer);
    changePlayer();
  });

  let resetBoard = function(){
    $('#board').find('td').text('');
    currentPlayer = 'X';
  };

};
/*let change = function(event){
  event.preventDefault();
  if ($(event.target).text() === ''){
    $(event.target).text('X');
  }
  else{
    $(event.target).text('');
  }
};*/

$(document).ready(() => {
  console.log('Poop.');
  playGame();
  //$('#board').on('click', change);
});
