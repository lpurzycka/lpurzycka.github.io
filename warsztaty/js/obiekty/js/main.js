'use strict';
class Ogloszenie {
    constructor ( tytul, cena, opis){
        this.tytul = tytul;
        this.cena = cena;
        this.opis = opis;
    }
    
    pobierzTytul (){
        return this.tytul;       
        
    }
    ustawCene (nowaCena) {
        this.cena = nowaCena;
    }
}

var ogloszenie1 = new Ogloszenie ("Rama łóżka", 500, "dobra rama łóżka");
ogloszenie1.ustawCene( 1500 );
//console.log(ogloszenie1);

var ogloszenie2 = new Ogloszenie("Sweter", 50, "ciepły sweter");
var tytul = ogloszenie2.pobierzTytul();
console.log(tytul);



