$(function() {
    'use strict';
  $("#count-sum").click(function(){   //oprogramuj zdarzenie "click" przycisku #count-sum
    var suma = 0;
$(".salary").each (function(){   //pobierz wszystkie wypłaty i za pomocą pętli i je zsumuj
  console.log($(this).text());
  
  suma += Number($( this ).text());   
  // Funkcja Number () konwertuje argument obiektu na liczbę reprezentującą wartość obiektu.
  
  // suma += parseInt($( this ).text());   
  // Funkcja parseInt () analizuje ciąg znaków i zwraca liczbę całkowitą. sumuje tylko liczby całkowite

});

console.log(suma);


$('#sum').html(suma);   // pobierz element o ID #sum i podmień mu treść na obliczoną sumę
});
});



 