var App = (props) => (
  <div>
    <Nav />
    <div className="col-md-7">
      <VideoPlayer currentVideo={props.videoData[0]} />
    </div>
    <div className="col-md-5">
      <VideoList videoList={props.videoData} />
    </div>
  </div>
);

ReactDOM.render(<App videoData={window.exampleVideoData} />, document.getElementById('app'));