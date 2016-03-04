$(document).ready(function() {


  var xhr = $.ajax({
    dataType: 'json',
    method: "GET",
    url: "https://galvanize-eats-api.herokuapp.com/menu"
  });

  xhr.done(function(data) {
     console.log("DONE");
     console.log(data);
     appendMenu(data);

  });

  xhr.fail(function(err){
   console.log("fail");
   console.log(err);
  });

  var appendMenu = function(data){
    var $menu = $('.menu');
    for (var i = 0; i < data.menu.length; i++) {
      $menu.append('<div class="menuID">' + data.menu[i].id + '</div>');
      $menu.append('<div class="menuName">' + data.menu[i].name + '</div>');
      $menu.append('<div class="menuPrice">' + data.menu[i].price + '</div>');
      $menu.append('<div class="menuType">' + data.menu[i].type + '</div>');
    }

  };





});
