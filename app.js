'use strict';

$('html').css({'width': '1000px'});
$('h1').css({'margin-left': '250px',
  'display': 'block',
  'text-decoration': 'underline'});

$('body').css({'display': 'block',
  'position': 'relative',
  'padding': '20px',
  'margin-left': '40px'});

$('input[type=checkbox]').css({'display': 'none'});
$('input[type=radio]').css({'display': 'none'});

$('input[type="checkbox"] + label.checkbox').css({'display':'inline-block',
  'cursor': 'pointer',
  'outline': '0',
  'width': '80px',
  'height': '80px',
  'background-image': 'url("form-elements-sprite.png")',
  'background-repeat': 'no-repeat'});

$('#checkBox input[type="checkbox"]:checked + label.checkbox:after').css({'background-position': '-100 bottom'});

$('input[type="radio"] + label.radio').css({'display':'inline-block',
  'cursor': 'pointer',
  'outline': '0',
  'width': '200px',
  'height': '200px',
  'background-image': 'url("form-elements-sprite.png")',
  'background-repeat': 'no-repeat',
  'background-position': '-420 0'});

$('input[type="radio"]:checked + label.radio:after').css({'background-position': '-500 bottom'});

$('button').css({'height': '60px',
  'width': '100px'});

$('button').hover(function(){
  $(this).css({'background-color': 'darkslategrey'});
},
function(){
  $(this).css({'background-color': 'lightgrey'});
}
);
