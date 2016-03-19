class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentVideo: {},
      videos: [{}, {}, {}, {}, {}],
    };
  }

  componentDidMount() {
    var options = {
      key: window.YOUTUBE_API_KEY, 
      maxResults: 5, 
      q: 'grey',
      videoEmbeddable: true,
      type: 'video',
      part: 'snippet'
    };
    this.serverRequest = this.props.videoData(options, function (result) {
      this.setState({
        currentVideo: result[0],
        videos: result
      });
    }.bind(this));
  }

  onListEntryClick(clickedSong) {
    console.log(clickedSong.props.video);
    // debugger;
    this.setState({
      currentVideo: clickedSong.props.video
    });
  }

  render() {
    return (
      <div>
        <Nav />
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