console.log( $ );  //sprawdzamy czy plik jest podpięty


$(function() {
    'use strict';
  
$('#pierwszyPrzycisk').click(function(){
 $('p:first').before($('p:last'));  
 });
 $('#drugiPrzycisk').click(function(){
 $('p:last').after($('p:first'));
 }); 
});
 
 
 
 