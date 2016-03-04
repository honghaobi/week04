$(document).ready(function() {

  $('.placeOrder').on('click', function(event) {
    window.location.href='orders.html';
  });

  $('.placeOrder').css( 'cursor', 'pointer' );

  var xhr = $.ajax({
    dataType: 'json',
    method: "GET",
    url: "https://galvanize-eats-api.herokuapp.com/menu"
  });

  xhr.done(function(data) {
     console.log(data);
     appendMenu(data);
     addItem();

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

var addItem = function(){

  $('button.addItem1').on('click', function() {
    if ($('#item1').val()>0) {
        $('.orderList').append('<div class="itemList1"><h5>CheeseBurger<small>------- $' + 10.99*$('#item1').val() + '</small></h5></div>');
    }
  });
  $('button.addItem2').on('click', function() {
    if ($('#item2').val()>0) {
      $('.orderList').append('<div class="itemList2"><h5>Cheese Pizza<small>------- $' + 9.99*$('#item2').val() + '</small></h5></div>');
    }
  });
  $('button.addItem3').on('click', function() {
    if ($('#item3').val()>0) {
      $('.orderList').append('<div class="itemList3"><h5>Hamburger<small>------- $' + 8.99*$('#item3').val() + '</small></h5></div>');
    }
  });
  $('button.addItem4').on('click', function() {
    if ($('#item4').val()>0) {
      $('.orderList').append('<div class="itemList4"><h5>Pepperoni Pizza<small>-------  $' + 11.99*$('#item4').val() + '</small></h5></div>');
    }
  });
  $('button.addItem5').on('click', function() {
    if ($('#item5').val()>0) {
      $('.orderList').append('<div class="itemList5"><h5>Sausage Pizza<small>------- $' + 12.99*$('#item5').val() + '</small></h5></div>');
    }
  });

  $('input').on('change',function() {
    var subtotal = 0;
    subtotal = 10.99 * $('#item1').val() + 9.99 * $('#item2').val() + 8.99 * $('#item3').val() + 11.99 * $('#item4').val() + 12.99 * $('#item5').val();
    var tax = (subtotal * 0.08).toFixed(2);
    var grandtotal = parseFloat(subtotal) + parseFloat(tax);
    $('.subtotal').html('Subtotal: $'+ subtotal);
    $('.tax').html('Tax: $' + tax);
    $('.grandtotal').html('Grand Total: $' + grandtotal);
  });
};

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



});
