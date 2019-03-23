import React, { Component } from "react";
import { connect } from "react-redux";

import { deleteVideo } from "../../actions/videoActions";

class VideoItem extends Component {
  videoDelete = id => {
    // console.log("viddelitem", id);
    this.props.deleteVideo(id);
  };

  render() {
    const { video } = this.props;
    const videoSrc = `http://youtube.com/embed/${video.videoKey}`;

    return (
      <div className="col-lg-4 col-md-4 mb-4" style={{ position: "relative" }}>
        <div
          onClick={e => this.videoDelete(video._id)}
          className="btn btn-primary btn-danger float-right"
        >
          X
        </div>
        {console.log(videoSrc)}
        <div className="video">
          <iframe
            target="_blank"
            allowFullScreen="allowFullScreen"
            src={videoSrc}
          />
        </div>
        <div className="title" style={{ color: "#fff" }}>
          {video.title}
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { deleteVideo }
)(VideoItem);
