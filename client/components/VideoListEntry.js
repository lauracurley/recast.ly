class VideoListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.clickEvent(this);
  }

  emptyDataMessage(video) {
    var playerContent;
    if (!video.snippet) {
      playerContent = 
      <div className="video-list-entry">No Video Available</div>;
    } else {
      playerContent =
        <div className="video-list-entry">
          <div className="media-left media-middle">
            <img className="media-object" src={this.props.video.snippet.thumbnails.default.url} alt="" />
          </div>
          <div className="media-body">
            <div className="video-list-entry-title" onClick={this.handleClick.bind(this)}>{this.props.video.snippet.title}</div>
            <div className="video-list-entry-detail">{this.props.video.snippet.description}</div>
          </div>
        </div>;
    }
    return playerContent;
  }

  render() {
    return (
      this.emptyDataMessage(this.props.video)
    );
  }

}
window.VideoListEntry = VideoListEntry;