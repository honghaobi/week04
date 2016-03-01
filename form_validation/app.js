$(document).ready(function() {

  var cost = 0;

  $('form').on('submit', function(event) {
    event.preventDefault();
    
    if ($('input[id = large]:checked').length > 0) {
      cost += 20;
    } else if ($('input[id = medium]:checked').length > 0) {
      cost += 15;
    } else if ($('input[id = small]:checked').length > 0) {
      cost += 10;
    }

    if ($('input[name = toppings]:checked').length > 0) {
      cost = cost + ($('input[name = toppings]:checked').length)*0.75;
    }

    if ($('input[name = toppingsPlus]:checked').length > 0) {
      cost = cost + ($('input[name = toppingsPlus]:checked').length)*1.25;
    }

    if ($('input[id = sauces3]:checked').length > 0) {
      cost += 1.5;
    }

    if ($('input[id = cheese]:checked').length > 0) {
      cost += 1;
    }

    if ($('input[id = breadSticks]:checked').length > 0) {
      cost += 5;
    }

    if ($('input[id = delivery]:checked').length > 0) {
      cost += 5;
    }

    if ($('input[id = pickup]:checked').length > 0) {
      $('input').removeClass('required');
    } else if (!$('.required').val()) {
      $(".error").remove();
      var errDiv = $('<div class="error">Please enter the required field</div>');
      $("form").append(errDiv);
      return false;
    }

    $('.bill').append("$" + cost);

  });

});
