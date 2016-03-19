window.searchYouTube = (options, callback) => {
  // debugger;
  $.ajax({
    //url: encodeURI('www.googleapis.com/youtube/v3/search?key=' + options.key + '&maxResults=' + options.maxResults + '&q=' + options.q + '&videoEmbeddable=true&type=video&part=snippet'),
    url: 'https://www.googleapis.com/youtube/v3/search?',
    type: 'GET',
    data: options,
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
