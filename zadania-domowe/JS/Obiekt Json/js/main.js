'use strict';
var jsonPracownicy=
{
       "pracownicy":[
        {"firstName": "Krystian", "lastName": "Dziopa"}, 
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
}

console.log(jsonPracownicy);

console.log ("--------");

jsonPracownicy.pracownicy.forEach(function(e){
    console.log(e);
});
console.log ("--------");

jsonPracownicy.pracownicy.forEach(function(element, index) {
    console.log("Element z indexem: " + index + " ma na imię: " + element.firstName + " na nazwisko: " + element.lastName);
})




