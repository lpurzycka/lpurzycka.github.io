// function zadanie4 (tablica = [0,1,2,3,4,5]) {
    'use strict';
  
// var suma = 0;
// for (var i=0; i < tablica.length; i++) {
// suma = suma + Math.pow(tablica[i], 2); 
//   }
// console.log ("suma kwadratów elementów tablicy to: " + suma);
// }
//   zadanie4();
  
  
  function zadanie4 (tablica) {

  var suma = 0;
  for (var i=0; i < tablica.length; i++) {
    suma = suma + Math.pow(tablica[i], 2); 
  }

  console.log ("suma kwadratów elementów tablicy to: " + suma);
} 

zadanie4([0,1,2,3,4,5]);