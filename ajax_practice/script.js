// var httpRequest = new XMLHttpRequest();
// httpRequest.onreadystatechange = function(){
//     if (httpRequest.readyState === 4) {
//        if(httpRequest.status < 400) {
//         //  console.log(httpRequest.responseText);
//          var data = JSON.stringify(httpRequest.responseText);
//          console.log(data);
//        }
//     }
//
// };
// httpRequest.open('GET', 'http://www.omdbapi.com/?t=Frozen&y=&plot=short&r=json');
// httpRequest.send();
//
// console.log(httpRequest);

$.ajax({
  url: 'https://www.omdbapi.com/?t=Deadpool&y=&plot=short&r=json',
  method: "GET",
  dataType: 'json',
  success: function(data, statusText, xhr) {
    console.log(data);
    console.log('movie title = ' + data.Title);
    console.log('status number = ' + xhr.status);
    console.log('status text = ' + statusText);
  },
  error: function(jqHXR) {
  console.log("ERROR: ", jqHXR.status);
}
});

// A "Race Condition" is a term used to refer to any code that relies on some other snippet of code having completed. For example, run the following in your browser. In what order to the console.log statements run?

// console.log("BEFORE THE AJAX");
//
// $.ajax({
//   method: "GET",
//   url: "http://omdbapi.com/?i=tt1392190",
//   success: function(info) {
//     console.log("DONE");
//     console.log(info);
//     //write all my code that relies on the response data
//   },
//   error: function(err){
//     console.log("FAIL");
//     console.log(err);
//   }
// });
//
// console.log("AFTER THE AJAX!");

//Promises are an alternate way to use callbacks to handle asychronous requests. Promises can often be used to write cleaner code, especially when one http request relies on the results from another. Promises are a complex topic that deserves it's own complete Learning Experience, but it's easy enough to get started. The following code does the same thing we've been doing with AJAX: make a request to the OMDB API and handle success and failure separately.

// $.ajax({
//   method: "GET",
//   url: "http://omdbapi.com/?i=tt1392190"
// })
// .done(function(info) {
//     console.log("Promises --- DONE");
//     console.log(info);
//   //write all my code that relies on the response data
//  })
// .fail(function(err){
//   console.log("FAIL");
//   console.log(err);
// });
