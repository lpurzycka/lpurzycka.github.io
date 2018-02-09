$(function() {
    'use strict';
 
    $("div").css({'width': '200px', 
                'height': '200px', 
                'backgroundColor' : 'red',
                
    });
    
  function zmianaKoloru(){
  $("div").animate({
    'backgroundColor' : 'blue' }, 5000, napis);
  } 
    
    function napis(){
            $("div").html("<h2> Animacja zakończona </h2>");
            // $("div").text("animacja zakończona");
    }
   
    
    $("button").click(function(){
    $("div").animate({
      'width' : '100px',
      'height' : '100px',
      'marginLeft' : '100px'},3000, zmianaKoloru);
  }); 
  
});
 
 
// drugi sposób:

// $(function() {
//   // style css
//     $("div").css({"width": "200px", 
//                 "height": "200px", 
//                 "position" : "absolute",
//                 "backgroundColor": "red"});

 
//   function zmianaKoloru() {
//         $("div").animate({backgroundColor: "blue"}, 5000, function(){
//         $("div").text("Animacja zakończona"); 
//         });
//     }
//   $("button").click(function() {
//     $("div").animate({'width': "100px",
//                       'height': "100px",
//                       'left': "100px"}, 3000, zmianaKoloru);
//   });
  
// });








 
