class App extends React.Component {

  constructor(props) {
    super(props);
    this.options = {
      key: window.YOUTUBE_API_KEY, 
      maxResults: 5, 
      q: 'dogs',
      videoEmbeddable: true,
      type: 'video',
      part: 'snippet'
    };

    this.onSearchClick = _.debounce(this.onSearchClick, 400);

    this.state = {
      currentVideo: {},
      videos: [{}, {}, {}, {}, {}]
    };
  }

  getVideos() {
    this.serverRequest = this.props.videoData(this.options, function (result) {
      this.setState({
        currentVideo: result.items[0],
        videos: result.items
      });
    }.bind(this));
  }

  componentDidMount() {
    this.getVideos();
  }

  onListEntryClick(video) {
    console.log(video);
    this.setState({
      currentVideo: video.props.video
    });
  }

  onSearchClick(searchTerm) {
    this.options.q = searchTerm;
    this.getVideos();
  }

  render() {
    return (
      <div>
        <Nav searchEvent={this.onSearchClick.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer currentVideo={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videoList={this.state.videos} clickEvent={this.onListEntryClick.bind(this)}/>
        </div>
      </div>
    );  
  }

}
ReactDOM.render(<App videoData={window.searchYouTube.bind(this)} />, document.getElementById('app'));