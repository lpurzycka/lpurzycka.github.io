class Ksiazka {         // klasa książka 
  constructor(tytul, autor, przeczytana) {
    'use strict';
  this.tytul = tytul;
  this.autor = autor;
  this.przeczytana = przeczytana;
  }
  
  opiszKsiazke () {    // warunek przeczytania książki 
    if (this.przeczytana ===true) {
      return 'Książka ma tytuł: ' + this.tytul + ' autorem jest: ' + this.autor + ' i została przeczytana.';
    }
    else {
      return 'Książka ma tytuł: ' + this.tytul + ' autorem jest: ' + this.autor + '  i nie została przeczytana';
    }
  }
  
}
// przypisanie książek do klasy książka //
var wiedzmin = new Ksiazka ("Wiedźmin", "Andrzej Sapkowski", true);
var panTadeusz = new Ksiazka ("Pan Tadeusz", "Adam Mickiewicz", false);
var lalka = new Ksiazka ("Lalka", "Bolesław Prus", false);
var zemsta = new Ksiazka ("Zemsta", "Aleksander Fredro", false);

var tablicaKsiazki = [wiedzmin, panTadeusz, lalka, zemsta];  // stworzenie tablicy z książkami 
// console.log (tablicaKsiazki);
console.log("------------");

// funkcja zliczajaca ilość książek które zostały przeczytane wraz z komunikatem 
// pętla for: //
function iloscPrzeczytanych(tablicaKsiazki) {
  var sumaPrzeczytanychKsiazek = 0;
  
  for(var i=0; i<tablicaKsiazki.length; i++) {
    if (tablicaKsiazki[i].przeczytana === true) {
      sumaPrzeczytanychKsiazek += 1;
    } 
      console.log(tablicaKsiazki[i].opiszKsiazke());
  }
  console.log('Liczba przeczytanych książek wynosi: ' + sumaPrzeczytanychKsiazek);
}
iloscPrzeczytanych(tablicaKsiazki);




// pętla forEach: 

// function iloscPrzeczytanych (tablicaKsiazki){                                     
//       var sumaPrzeczytanychKsiazek = 0;                                      
//       tablicaKsiazki.forEach(function(element) {
//       if(element.przeczytana){
//         sumaPrzeczytanychKsiazek += 1;
//       }
//       console.log(element.opiszKsiazke());
//       });
//       console.log('Liczba przeczytanych książek wynosi: ' + sumaPrzeczytanychKsiazek);
//     }
//     iloscPrzeczytanych(tablicaKsiazki);














