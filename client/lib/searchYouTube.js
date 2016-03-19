var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'www.googleapis.com/youtube/v3/search?key=' + options[key] + '&maxResults=' + options[maxResults] + '&q=' + options[q] + '&videoEmbeddable=true&type=video&part=snippet', // plus some variables for our search params
    type: 'GET',
    data: JSON.stringify(),
    success: function(returnedData) {
      callback(returnedData);
      console.log(returnedData);
    },
    error: function(e) {
      console.error('searchYouTube get request didnt go through', e);
    }
  });
};

window.searchYouTube = searchYouTube;
