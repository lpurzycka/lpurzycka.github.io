//   function ciag(n) {
    'use strict';
// if (n <= 0) {
//   return 0;}
// else if (n === 1){ 
//   return 1;
// }
// else {
// return (ciag(n-1) + ciag (n-2));
// } 
//   }
// console.log("ciąg Fibonacciego to:" + ciag(10));

// // w miejsce n wpisz liczbę


function ciag(n) {
  if(n===0) {
    return 0;
  }
    else if(n<=2){
    return 1;
  }
 else if(n>2) {
    var a=1;  
    var b=1;
    var c=0;

  for (i=3; i<=n; i ++){
      c=a+b;
      a=b;
      b=c;
    }
    console.log("c: " + c); 
     }
    return c;
    }
console.log("Poszukiwana liczba to: " + ciag(3));

    








  

