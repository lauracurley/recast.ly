class VideoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="video-list media">
        {this.props.videoList.map(videoElement =>
          <VideoListEntry video={videoElement} clickEvent={this.props.clickEvent}/>
        )};
      </div>
    );
  }
}


window.VideoList = VideoList;
