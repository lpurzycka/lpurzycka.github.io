'use strict';

var pierwszy = document.getElementById("pierwszy");
var drugi = document.getElementById("drugi");
var przycisk = document.getElementById("przycisk");

function zmienKolor() {
    pierwszy.style.backgroundColor = "red";
    drugi.style.backgroundColor = "yellow";
}
przycisk.onclick = zmienKolor;



