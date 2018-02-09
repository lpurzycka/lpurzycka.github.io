'use strict';
$(function () {
     
    $("button").click(function () {
        $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
            function (pobierzDane) {
//                 
                
                $("body").append("<div>");
                $("div").attr("id", "dane-programisty");
//            albo:
//            $("#przycisk").after('<div id="dane-programisty" />') ;  

                $("#dane-programisty").append(
                    "imie: " + pobierzDane.imie + ", " +
                    "nazwisko: " + pobierzDane.nazwisko + ", " +
                    "zawód: " + pobierzDane.zawod + ", " +
                    "firma: " + pobierzDane.firma);
        
            });
    });
});




