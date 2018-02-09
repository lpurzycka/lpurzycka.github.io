 'use strict'

function zadanie3 (tablica) {  
  var suma = 0;
var iloczyn = 1;
for (var i=0; i < tablica.length; i++) {
  suma = suma + tablica[i]; 
  iloczyn = iloczyn * tablica [i];
}
  console.log ("suma liczb z tablicy to: " + suma);
  console.log ("iloczyn liczb z tablicy to: " + iloczyn);

}
  zadanie3([1,2,3,4,5,6]);
  
  
//   function zadanie3 (tablica = [1,2,3,4,5,6]) {
  
// var suma = 0;
// for (var i=0; i < tablica.length; i++) {
//   suma = suma + tablica[i]; }
//   console.log ("suma liczb z tablicy to: " + suma);
  
// var iloczyn = 1;
// for (var i =0; i < tablica.length; i ++){
//   iloczyn= iloczyn * tablica [i];}  
//   console.log ("iloczyn liczb z tablicy to: " + iloczyn);
  
  
// }
//   zadanie3();