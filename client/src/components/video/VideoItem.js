import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { deleteVideo } from "../../actions/videoActions";

class VideoItem extends Component {
  videoDelete = id => {
    this.props.deleteVideo(id);
  };

  render() {
    const { video } = this.props;

    return (
      <div className="col-lg-4 col-md-4 mb-4" style={{ position: "relative" }}>
        {/* <Link
          className="btn btn-primary btn-danger float-right"
          to={`/videos/delete/${video._id}`}
        >
          X
        </Link> */}
        <div
          onClick={e => this.videoDelete(video._id)}
          className="btn btn-primary btn-danger float-right"
        >
          X
        </div>
        <Link to={`videos/video/${video.videoKey}`}>
          <img src={video.thumbnail ? video.thumbnail : "img/no-photo.png"} />
        </Link>
        <div className="title" style={{ color: "#fff", minHeight: "80px" }}>
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
