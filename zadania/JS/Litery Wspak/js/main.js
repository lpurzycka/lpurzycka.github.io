function zadanie1 (napis) {
    'use strict';
  var literyOddzielnie = napis.split('');
  var literyWspak = literyOddzielnie.reverse();
  var literyRazem = literyWspak.join('');
  console.log(napis);
  return literyRazem;
}

console.log (zadanie1 ("Akademia108"));