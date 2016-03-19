class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentVideo: this.props.videoData.shift(),
      videos: this.props.videoData,
    };
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
ReactDOM.render(<App videoData={window.exampleVideoData} />, document.getElementById('app'));