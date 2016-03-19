class VideoPlayer extends React.Component {

  constructor(props) {
    super(props);
  }
  emptyDataMessage(video) {
    var playerContent;
    if (!video.snippet) {
      playerContent = 
        <div className="video-player">
          <div className="embed-responsive embed-responsive-16by9">
            <div>No video available</div>
          </div>
        </div>;
    } else {
      playerContent =
        <div className="video-player">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={'https://www.youtube.com/embed/' + this.props.currentVideo.id.videoId + '?autoplay=1'} allowFullScreen></iframe>
          </div>
          <div className="video-player-details">
            <h3>{this.props.currentVideo.snippet.title}</h3>
            <div>{this.props.currentVideo.snippet.description}</div>
          </div>
        </div>;
    }
    return playerContent;
  }

  render() {
    return (
      this.emptyDataMessage(this.props.currentVideo)
    );
  }
}
window.VideoPlayer = VideoPlayer;