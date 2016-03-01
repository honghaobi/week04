$(document).ready(function() {

   var outputString = '';
   var $span = $('span');
   var $screen = $('#screen');

   var calculation = function (){
     $span.on('click', function(event) {
       var value = this.innerText;
      // ($(this).hasClass('operator') && outputArray[outputArray.length - 1] !== value)
       if (value !== 'C' && this.id !== 'calc') {
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
