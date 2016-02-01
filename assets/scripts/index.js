'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

// load sass manifest
require('../styles/index.scss');

let playGame = function(){
  let currentPlayer = 'X';
  let turnCounter = 0;
  let xWins = 0;
  let oWins = 0;
  let changePlayer = function(){
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  };

  let checkWinner = function(player){
    //top row
    if ($('#board').find('#1').text() === player
    && $('#board').find('#2').text() === player
    && $('#board').find('#3').text() === player){
      alert(player + ' is the winner!');
      updateScoreboard(player);
      changePlayer();
      resetBoard();
    }
    //middle row
    if ($('#board').find('#4').text() === player
    && $('#board').find('#5').text() === player
    && $('#board').find('#6').text() === player){
      alert(player + ' is the winner!');
      updateScoreboard(player);
      changePlayer();
      resetBoard();
    }
    //bottom row
    if ($('#board').find('#7').text() === player
    && $('#board').find('#8').text() === player
    && $('#board').find('#9').text() === player){
      alert(player + ' is the winner!');
      updateScoreboard(player);
      changePlayer();
      resetBoard();
    }
    //left column
    if ($('#board').find('#1').text() === player
    && $('#board').find('#4').text() === player
    && $('#board').find('#7').text() === player){
      alert(player + ' is the winner!');
      updateScoreboard(player);
      changePlayer();
      resetBoard();
    }
    //middle column
    if ($('#board').find('#2').text() === player
    && $('#board').find('#5').text() === player
    && $('#board').find('#8').text() === player){
      alert(player + ' is the winner!');
      updateScoreboard(player);
      changePlayer();
      resetBoard();
    }
    //right column
    if ($('#board').find('#3').text() === player
    && $('#board').find('#6').text() === player
    && $('#board').find('#9').text() === player){
      alert(player + ' is the winner!');
      updateScoreboard(player);
      changePlayer();
      resetBoard();
    }
    //left diagonal
    if ($('#board').find('#1').text() === player
    && $('#board').find('#5').text() === player
    && $('#board').find('#9').text() === player){
      alert(player + ' is the winner!');
      updateScoreboard(player);
      changePlayer();
      resetBoard();
    }
    //right diagonal
    if ($('#board').find('#3').text() === player
    && $('#board').find('#5').text() === player
    && $('#board').find('#7').text() === player){
      alert(player + ' is the winner!');
      updateScoreboard(player);
      changePlayer();
      resetBoard();
    }
    //Check for a draw
    if (turnCounter === 9){
      alert('It\'s a draw!');
      changePlayer();
      resetBoard();
    }
  };

  //play an individual turn
  $('#board').find('td').on('click', function(){
    if ($(this).text() === ''){
      $(this).text(currentPlayer);
      checkWinner(currentPlayer);
      changePlayer();
      $('#currentPlayer').text('Current Player: ' + currentPlayer);
      turnCounter++;
    }
  });

  let resetBoard = function(){
    $('#board').find('td').text('');
    changePlayer();
    turnCounter = 0;
  };

  let updateScoreboard = function(player){
    if (player === 'X'){
      xWins++;
      $('#x-score').text('X Wins: ' + xWins);
    }
    else{
      oWins++;
      $('#o-score').text('O Wins: ' + oWins);
    }
  };
};

$(document).ready(() => {
  console.log('Poop.');
  playGame();
});
