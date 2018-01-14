'use strict';
var wszystkieZgody = document.getElementById("wszystkie-zgody");
console.log(wszystkieZgody);


var wszystkieCheckboxy = document.querySelectorAll('input[type=checkbox]');
console.log(wszystkieCheckboxy);


function checkboxState(cb) {

    console.log(cb.checked);
    var checkCheckbox = document.querySelectorAll('input[type=checkbox]')[0];
    if (checkCheckbox.checked) {
        return true;
    }
    else {
        return false;
    }
    


}
