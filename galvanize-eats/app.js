$(document).ready(function() {

  var xhr = $.ajax({
    dataType: 'json',
    method: "GET",
    url: "https://galvanize-eats-api.herokuapp.com/menu"
  });

  xhr.done(function(data) {
     console.log(data);
     appendMenu(data);

  });

  xhr.fail(function(err){
   console.log("fail");
   console.log(err);
  });

  var appendMenu = function(data){
    var $menuBurger = $('.menuBurger');
    var $menuPizza = $('.menuPizza');
    for (var i = 0; i < data.menu.length; i++) {
      if (data.menu[i].type === 'burger') {
        $menuBurger.append('<div class="menuName">' + data.menu[i].name + '</div>');
        $menuBurger.append('<div class="menuPrice">' + data.menu[i].price + '</div>');
        $menuBurger.append('<div class="menuQuantity"> Quantity: ' + '<input id="item' + data.menu[i].id + '" type="text" size="3" value="0"' + '</div>');
        $menuBurger.append('<button class="addItem' + data.menu[i].id + '" type="button" name="button">Add</button>');
      } else if (data.menu[i].type === 'pizza') {
        $menuPizza.append('<div class="menuName">' + data.menu[i].name + '</div>');
        $menuPizza.append('<div class="menuPrice">' + data.menu[i].price + '</div>');
        $menuPizza.append('<div class="menuQuantity"> Quantity: ' + '<input id="item' + data.menu[i].id + '" type="text" size="3" value="0"' + '</div>');
        $menuPizza.append('<button class="addItem' + data.menu[i].id + '" type="button" name="button">Add</button>');
      }
    }
  };

  $('button.addItem').on('click', function() {
    $('.orderList').append('<h7>CheeseBurger</h7><h8>$10.99</h8>');
  });





  var sendOrder = function(){
    var xhr = $.ajax({
      method: "POST",
      url: "https://galvanize-eats-api.herokuapp.com/orders"
    });

    xhr.done(function(data) {
       console.log(data);
       appendMenu(data);

    });

    xhr.fail(function(err){
     console.log("fail");
     console.log(err);
    });
  };

  $("#orderSubmit").on('click', function(event) {
    event.preventDefault();
    sendOrder();
  });

});
