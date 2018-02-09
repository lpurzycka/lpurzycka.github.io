function wyswietl (znak) {
    'use strict';
  document.getElementById("ekran").value += znak
  
}

function wynik() {
  var ekran = document.getElementById("ekran").value;
  document.getElementById("ekran").value = eval(ekran);
}

function wyczysc() {
document.getElementById("ekran").value = " ";}



