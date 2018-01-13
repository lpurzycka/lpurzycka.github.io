var formularz = document.getElementById("formularz");

var imie = document.getElementById("imie");
console.log(imie.value);

var nazwisko = document.getElementById("nazwisko");
console.log(nazwisko.value);


function pobierzImie(e) {
    'use strict';
    e.preventDefault();
    console.log (imie.value);
    console.log(nazwisko.value);
}


//formularz.onsubmit = pobierzImie;


//nawiasy powodują automatyczne wywołanie funkcji bez eventu, nacisniecia

//jak bedzie z nawiasami to po uruchomieniu strony funkcja sie wywoła, a bez nawiasami po kliknieciu
