//Stwórz przycisk “Pobierz dane”. Za pomocą jQuery, gdy strona już się
//całkowicie załaduje, podepnij własną funkcję pod zdarzenie click tego
//przycisku.
//W tej funkcji pobierz z serwera objekt JSON ( URL =
//http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/
//akademia108.pl ). Dane zawarte w pobranym obiekcie wstaw do strony
//Napisz kod za pomocą jQuery i użyj do tego funkcji getJSON()
'use strict';
$(function () {

    $("button").click(function () {

        $.getJSON("http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
            function (pobierzDane) {
                console.log(pobierzDane);


//$("body").add("p").append(pobierzDane.userId +", " + pobierzDane.userName +", " + pobierzDane.userURL );
        
        $("body").add("p").append(pobierzDane.userId);
        $("body").add("p").append(pobierzDane.userName);
            $("body").add("p").append( pobierzDane.userURL );
        
        });
    });

});
//
//function pobierzDane(method, url) {
//    console.log('dziala');
//
//
//    $.getJSON("http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
//        function (data) {
//            console.log(data);
//        });
//}


//var przycisk = document.getElementsByTagName("button");
//przycisk.onclick = pobierzDane;
//



//});
