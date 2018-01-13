'use strict';

//Kalkulator czasu podróży
//Stwórz funkcję, która bedzie przyjmować dwa paramenty- dystans podrózy w km oraz prędkosc podrozy km/h  
//funkcja ma policzyć i zwrócić czas naszej podrozy
//wynik wyswietl w konsoli w postawci "Dystans pokonasz w 4h"

//czas= dystans/predkosc
//t=s/v


//console.log("Kalkulor czasu podróży");

function formatujCzas (czasPrzejazdu ) {
    var sformatowanyCzas;
    var godziny = Math.floor(czasPrzejazdu);
    var minuty = (czasPrzejazdu - godziny) * 60;
    minuty= Math.floor(minuty);
    sformatowanyCzas = godziny + "h " + minuty + "min.";
    return sformatowanyCzas;
}


function czasPodrozy(s,v) {
    if( v <=0 ) {
        console.error( "Błąd! Prędkość nie może być mniejsza równa 0");
        //sprawdzamy czy predkość jest wieksza od 0, jeżeli mniejsza, to wywoła błąd
    }
  var czas = s /v;
//    console.log("Jestem tutaj");
    return czas;
    
    //return konczy działanie kodu
}

var czasPrzejazdu = czasPodrozy( 200, 50 );
console.log("Dystans pokonasz w " + formatujCzas(czasPrzejazdu));


var czasPrzejazdu = czasPodrozy( 200, 0 );
console.log("Dystans pokonasz w " + formatujCzas(czasPrzejazdu));



//var czasPrzejazdu2 = czasPodrozy( 200, 100 );
//console.log("Dystans pokonasz w " + czasPrzejazdu2 + "h");
//
//var czasPrzejazdu3 = czasPodrozy( 400, 130 );
//console.log("Dystans pokonasz w " + czasPrzejazdu3 + "h");