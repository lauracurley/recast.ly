var VideoList = (props) => (
  <div className="video-list media">
    {props.videoList.map(videoElement =>
      <VideoListEntry video={videoElement} />
    )};
  </div>
);

window.VideoList = VideoList;
