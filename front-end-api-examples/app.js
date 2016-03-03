(function(){
  $(document).ready(function(){

    imdbSearch();
    googleBooksSearch();
    itunes();

  })
})();


function imdbSearch(){

  var userInput, searchUrl,results;
  var outputArea = $("div#omdb .results");

  $('#imdbButton').on("click", function(){
     userInput = $('#imdbInput').val();
     searchUrl = "http://www.omdbapi.com/?s=" + userInput

     $.get(searchUrl, function( data ) {
       results = data.Search;
       results.forEach(function(item){
         outputArea.append("<p>" + item.Title + "</p>")
       })
     });

  })
}


function googleBooksSearch(){

  var userInput, searchUrl, results;
  var outputArea = $("div#googlebooks .results");

  $('#googlebooksButton').on("click", function(){
     userInput = $('#googlebooksInput').val();
     searchUrl = "https://www.googleapis.com/books/v1/volumes?q=intitle:" + userInput

     $.get(searchUrl, function( data ) {
       results = data.items;
       results.forEach(function(item){
         outputArea.append("<li>" + item.volumeInfo.title + "<br> Pages:" + item.volumeInfo.pageCount + "</li>")
       })
     });

  })
}

function itunes(){

  var userInput, searchUrl, results;
  var outputArea = $("div#itunes .results");

  $('#itunesButton').on("click", function(){
     userInput = $('#itunesInput').val();
     searchUrl = "https://itunes.apple.com/search?term=" + userInput

      $.ajax({
          type: "GET",
          dataType:"jsonp",
          url: searchUrl
      }).then(function (data) {
          results = data.results;
          results.forEach(function(item){
            outputArea.append("<li>" + item.artistName + " - " + item.trackName + " <a href='" + item.previewUrl + "'>Preview Song</a></li>")
          })
      });
  });
}
