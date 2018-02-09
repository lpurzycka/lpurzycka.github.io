'use strict';
function ajax(method, url) {
    //    definicja funkcji ajax
    var xhttp = new XMLHttpRequest();
    //console.log(xhttp);
    xhttp.open(method, url);
    //    otwieramy  połączenie
    xhttp.onreadystatechange = function () {
       //funkcja wykona sie dopiero kiedy zmieni sie status    
        if (xhttp.readyState == 4) {
            //gdy stany są pobrane i gotowe do użycia
            //   4 = dokument został w pełni przesłany i jest gotowy do użycia
            if (xhttp.status == 200) {
                var data = xhttp.responseText;
                console.log(data);
              //pobieranie danych        
                var myObj = JSON.parse(this.responseText);
                    
                var stworzonyDiv = document.createElement("div");
                stworzonyDiv.id = "dane-programisty";
                
                var tekstDiva = document.createTextNode(myObj.imie + " , " + myObj.nazwisko + " , " + myObj.zawod + " , " + myObj.firma);
                stworzonyDiv.appendChild(tekstDiva);
                document.body.appendChild(stworzonyDiv);
//                aby umieścić diva pod buttonem:
                stworzonyDiv.parentNode.insertBefore(stworzonyDiv, document.getElementById("przycisk").nextSibling);
}

            xhttp = null;
            //zeruj obiekt, aby nie utrzymawać nie potrzebnego już połączenia z serwerem
            //"czerwona słuchawka"
        }
    }
    xhttp.send();
};

function pobierzDane(method, url) {
//    console.log('dziala');
    ajax("GET", "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php");
}
var przycisk = document.getElementsByTagName("button");
przycisk.onclick = pobierzDane;
