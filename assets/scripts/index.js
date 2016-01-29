'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

// load sass manifest
require('../styles/index.scss');

let change = function(event){
  event.preventDefault();
  if ($(event.target).text() === ''){
    $(event.target).text('X');
  }
  else{
    $(event.target).text('');
  }
};

$(document).ready(() => {
  console.log('Poop.');
  $('#board').on('click', change);
});
