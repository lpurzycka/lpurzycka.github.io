    'use strict';
    
    function ajax(method, url) {
            var xhttp = new XMLHttpRequest();
            xhttp.open(method, url);
            xhttp.onreadystatechange = function () {
                if (xhttp.readyState == 4) {
                    if (xhttp.status == 200) {
                    var data = xhttp.responseText;
//                 console.log(data);
                        var tablica = JSON.parse(this.responseText);
                       
                        console.log(tablica);
                        
      tablica.forEach(function (element) {
          var paragraf = document.createElement("p");
          var tekstParagrafu = document.createTextNode("id: " + element.id + ", name: " + element.name + ", username: " + element.username + ", email: " + element.email + ", address: " + element.address);
          paragraf.appendChild(tekstParagrafu);
          document.body.appendChild(paragraf);
      });
                    }
                    xhttp = null;
                           }
                       }
                       xhttp.send();
                   }; 

    function obslugaSkrolla() {
        var d = document.documentElement;
        var wysokoscHtml = d.offsetHeight;
        var scrollTop = d.scrollTop;
        var wysokoscWewOkna = window.innerHeight;
        
        console.log('Scroll Top: ' + d.scrollTop);

            if (wysokoscHtml == scrollTop +wysokoscWewOkna) {
            console.log('jestem na dole');
                  ajax("GET", "https://jsonplaceholder.typicode.com/users");
            }
    }
 


    window.onscroll = obslugaSkrolla
