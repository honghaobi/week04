$(document).ready(function() {
   var outputString = '';
   var $span = $('span');
   var $screen = $('#screen');

   var calculation = function (){
     $span.on('click', function(event) {
       var value = this.innerText;
       var lastValue = outputString[outputString.length - 1];
       var thisOperator = $(this).hasClass('operator');

       if (thisOperator && lastValue === "*" || thisOperator && lastValue === "/" || thisOperator && lastValue === "+" ||thisOperator && lastValue === "-"){
         return;
       } else if(value === "x") {
         outputString += "*";
         printResult();
       } else if(value === "\u00f7") {
         outputString += "/";
         printResult();
       }if (value !== 'C' && value !== "x" && value !== "\u00f7" && this.id !== 'calc') {
         outputString += value;
         printResult();
       } else if (value === 'C'){
         outputString = '';
         clearScreen();
       } else if (this.id === 'calc'){
         outputString = eval(outputString);
         printResult();
         outputString = '';
       }
     });

     var printResult = function () {
       $screen.text(outputString);
     };

     var clearScreen = function () {
       $screen.text('');
     };
   };
   calculation();
});
