'use strict';

var zgoda1 = document.getElementById("zgoda-marketingowa-1");
console.log(zgoda1);
var zgoda2 = document.getElementById('zgoda-marketingowa-2');
console.log(zgoda2);
var wszystkieZgody = document.getElementById("wszystkie-zgody");
console.log(wszystkieZgody);

function checkboxState() {
    //    console.log(this);

    if (this.checked) {
        zgoda1.checked = true;
        zgoda2.checked = true;
        //        console.log( "zaznaczony");
    } else {
        zgoda1.checked = false;
        zgoda2.checked = false;
        //        console.log("NIEzaznaczony!!!");
    }

};
wszystkieZgody.addEventListener("change", checkboxState);

var imieNazwisko = document.getElementById("name");
console.log(imieNazwisko);
var email = document.getElementById("email");
console.log(email);
var formularz = document.getElementById("formularz");
console.log(formularz);


function sprawdzPola(e) {
   
    console.log(e);
    if (imieNazwisko.value == '') {
        e.preventDefault();
        console.log("puste pole");
    } else {
        e.preventDefault();
        console.log("tekst");
    }
}

formularz.addEventListener("submit", sprawdzPola);

 