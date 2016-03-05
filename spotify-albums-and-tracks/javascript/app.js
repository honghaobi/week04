// Self envoking function! once the document is ready, bootstrap our application.
// We do this to make sure that all the HTML is rendered before we do things
// like attach event listeners and any dom manipulation.
(function(){
  $(document).ready(function(){
    bootstrapSpotifySearch();
  });
})();

function bootstrapSpotifySearch(){

  var userInput, searchUrl, results;
  var outputArea = $("#q-results");

  $('#spotify-q-button').on("click", function(){
      var spotifyQueryRequest;
      spotifyQueryString = $('#spotify-q').val();
      searchUrl = "https://api.spotify.com/v1/search?type=artist&q=" + spotifyQueryString;

      spotifyQueryRequest = $.ajax({
          type: "GET",
          dataType: 'json',
          url: searchUrl
      });

      spotifyQueryRequest.done(function (data) {
        var artists = data.artists;

        outputArea.html('');

        artists.items.forEach(function(artist){
          var artistLi = $("<li class='artist'>" + artist.name + " - " + artist.id + "</li>");
          artistLi.attr('data-spotify-id', artist.id);
          outputArea.append(artistLi);

          artistLi.click(displayAlbumsAndTracks);

        });
      });

      spotifyQueryRequest.fail(function (error) {
        console.log("Something Failed During Spotify Q Request:");
        console.log(error);
      });
  });
}

function displayAlbumsAndTracks(event) {
  var appendToMe = $('#albums-and-tracks');
  getAlbumsAndTracks(event);
}

function getAlbumsAndTracks(event){
  var spotifyQueryRequest;
  spotifyQueryString = $(event.target).attr('data-spotify-id');
  searchUrl = "https://api.spotify.com/v1/artists/" + spotifyQueryString + "/albums";

  spotifyQueryRequest = $.ajax({
      type: "GET",
      dataType: 'json',
      url: searchUrl
  });


  spotifyQueryRequest.done(function(data){

    var outputArea = $('#albums-and-tracks');
    // Clear the output area
    outputArea.html('');
    var albumsLi;
    for (var i = 0; i < data.items.length; i++) {
      albumsLi = $("<img src='" + data.items[i].images[0].url + "' />" + "<li class='album'>" + data.items[i].name + " - " + data.items[i].id + "</li>" + "<div id='"+ data.items[i].id + "'></div>");
      albumsLi.attr('data-spotify-Albumid', data.items[i].id);
      getTracks(data.items[i].id);
      outputArea.append(albumsLi);
    }


    function getTracks(albumID){
      var spotifyQueryRequest;
      spotifyQueryString = albumID;
      searchUrl = "https://api.spotify.com/v1/albums/" + spotifyQueryString;

      // Generate the request object
      spotifyQueryRequest = $.ajax({
          type: "GET",
          dataType: 'json',
          url: searchUrl
      });

      spotifyQueryRequest.done(function(data){
        var outputArea = "#" + albumID;

        for (var i = 0; i < data.tracks.items.length; i++) {
          var tracksLi = $("<li>" + data.tracks.items[i].name + "</li>" + "<div id='"+ data.tracks.items[i].id + "'></div>");
          getTrackInfo(data.tracks.items[i].id);
          $(outputArea).append(tracksLi);
        }
      });
    }

    function getTrackInfo(trackID){
      var spotifyQueryRequest;
      spotifyQueryString = trackID;
      searchUrl = "https://api.spotify.com/v1/tracks/" + spotifyQueryString;

      // Generate the request object
      spotifyQueryRequest = $.ajax({
          type: "GET",
          dataType: 'json',
          url: searchUrl
      });

      spotifyQueryRequest.done(function(data){
        var outputArea = "#" + trackID;
        var popRating ="popularRating ----> " + data.popularity;
        $(outputArea).append(popRating);
      });
    }
  });
}



/* YOU MAY WANT TO CREATE HELPER FUNCTIONS OF YOUR OWN */
/* THEN CALL THEM OR REFERENCE THEM FROM displayAlbumsAndTracks */
/* THATS PERFECTLY FINE, CREATE AS MANY AS YOU'D LIKE */
