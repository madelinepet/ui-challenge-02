'use strict';

$('html').css({'width': '1000px'});
$('h1').css({'margin-left': '250px',
  'display': 'block',
  'text-decoration': 'underline'});

$('body').css({'display': 'block',
  'position': 'relative',
  'padding': '20px',
  'margin-left': '40px'});

$('input[type=checkbox]').css({'opacity': '0'});
$('input[type=radio]').css({'opacity': '0'});

$('input[type="checkbox"] + label.checkbox').css({'display':'inline-block',
  'cursor': 'pointer',
  'outline': '0',
  'width': '200px',
  'height': '200px',
  'background-image': 'url("form-elements-sprite.png")',
  'background-repeat': 'no-repeat',
  'background-position': '0 0'});


let changeCheckbox = function (){
  $('input[type="checkbox"] + label.checkbox').css({'background-position': '-230 0'});
  console.log('clicked');
};

$('input[type="checkbox"] + .checkbox').on('click', changeCheckbox);


$('input[type="radio"] + label.radio').css({'display':'inline-block',
  'cursor': 'pointer',
  'outline': '0',
  'width': '200px',
  'height': '200px',
  'background-image': 'url("form-elements-sprite.png")',
  'background-repeat': 'no-repeat',
  'background-position': '-420 0'});

let changeRadio = function (){
  $('input[type="radio"] + label.radio').css({'background-position': '-650 bottom'});
  console.log('clicked');
};

$('input[type="radio"] + .radio').on('click', changeRadio);


$('button').css({'height': '60px',
  'width': '100px'});

$('button').hover(function(){
  $(this).css({'background-color': 'darkslategrey'});
},
function(){
  $(this).css({'background-color': 'lightgrey'});
}
);
