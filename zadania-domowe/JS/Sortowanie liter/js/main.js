// pierwsza wersja:

// function zadanie2 (napis) {
    'use strict';
//   var literyOddzielnie = napis.split('');
//   var posortowaneLitery = literyOddzielnie.sort();
//   var literyRazem = posortowaneLitery.join('');
//   console.log(napis);
//   return literyRazem;
// }

// console.log (zadanie2 ("Akademia108"));





function zadanie2 (napis) {
  var wynik=napis.split('').sort().join("");
  
  return wynik;
}

console.log (zadanie2 ("Akademia108"));
