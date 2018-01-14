'use strict';

$(function(){
    
    var slideShow = $(".slide-show");
    var slideCount = $(".single-slide").length;
    var slideWidth = 100  / slideCount;
    var slideIndex = 0;
   
    
//    ustaw szerokość kontenera
    
    slideShow.css({"width" : slideCount + "00%"});
    
    //nadaje slajdom szerokość i lewy margines
    
     slideShow.find(".single-slide").each(function(index){
          //console.log(slideWidth, index*slideWidth);
        $(this).css({
                   "width": slideWidth + "%",
                   "margin-left": index * slideWidth + "%",
            });
                });  
    
//funckja obslugująca kliki nawigacji
 function slide(newSlideIndex){
     
//     jeżeli wychodzimy poza ilość naszych slajdów, zatrzymujemy działanie
     
     if( newSlideIndex <0 || newSlideIndex > (slideCount - 1)){
         return;
     }
 
//     czas przesunięcia slidera -animacja
     var animDuration = 1000;
     
     var slideCaption = slideShow.find(".slide-caption").eq(newSlideIndex);
     
     var marginLeft = (newSlideIndex * (-100)) +"%";
     
      //animację przesunięcia slidera
     slideCaption.hide(100);
     slideShow.animate({"margin-left": marginLeft}, animDuration, function(){
         slideIndex = newSlideIndex;
         slideCaption.fadeIn(600);
     });
 }
    
   
$(".prev-slide").click(function(){
    slide(slideIndex - 1);
});
    
$(".next-slide").click(function(){
    slide(slideIndex + 1);
});
     
     
     

   });                 
                   
