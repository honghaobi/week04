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
     console.log(data.menu[0].id);

  });

  xhr.fail(function(err){
   console.log("FAIL");
   console.log(err);
  });

  var appendMenu = function(data){
    var $menu = $('.menu');
    for (var i = 0; i < data.menu.length; i++) {
      $menu.append(data.menu[i].id);
    }

  };





});
