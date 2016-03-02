console.log('You\'re ready to begin!');

var xhr = $.ajax({
  method: "GET",
  url: "index.html"
});

xhr.done(function(data) {
    console.log(data);
});

xhr.fail(function(err){
  console.log("FAIL");
  console.log(err);
});

var xhr = $.ajax({
  method: "GET",
  dataType: 'json',
  url: "data.json"
});

xhr.done(function(data) {
    console.log(data);
});

xhr.fail(function(err){
  console.log("FAIL");
  console.log(err);
});

var xhr = $.ajax({
  method: "GET",
  dataType: 'json',
  url: "http://www.reddit.com/r/aww.json"
});

xhr.done(function(data) {
    console.log(data.data.children[0].data);
    console.log(data.data.children[0].data.author);
    console.log(data.data.children[0].data.title);
    console.log(data.data.children[0].data.url);
    var img = data.data.children[0].data.url.slice(0, -1);
    $('.img').append("<img src='" + img + "'/>");
});

xhr.fail(function(err){
  console.log("FAIL");
  console.log(err);
});
