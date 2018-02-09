function sortowanie(tablica) {
    'use strict';
    for ( var i = 0; i < tablica.length; i++){  //sprawdzenie czy funkcja przejdzie po wszystkich elementach
      for (var j = 0; j < tablica.length -1; j++){ //jeden przebieg bąbelkowy
        if (tablica[j] > tablica[j + 1]) {
          //zamiana miejsc elementów, jeżeli spełniony jest warunek, 
          var zmiennaPomocnicza = tablica [j +1]; // przypisujemy zmiennejPomocniczej wartość mniejszą.
          tablica[j +1] = tablica[j]; // na miejsce tej wartości wpisujemy wartość większą
          tablica [j] = zmiennaPomocnicza; }// przypisujemy na miejsce tablica[j] to co jest w zmiennejPomocniczej
    }
  }
  
  console.log(tablica);
}
sortowanie([12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1]);






