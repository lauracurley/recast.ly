var VideoList = (props) => (
  <div className="video-list media">
    {props.videoList.map(videoElement =>
      <VideoListEntry video={videoElement} clickEvent={props.clickEvent.bind(this)}/>
    )};
  </div>
);

window.VideoList = VideoList;
