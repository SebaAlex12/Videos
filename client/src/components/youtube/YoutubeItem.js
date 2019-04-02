import React, { Component } from "react";
import { Link } from "react-router-dom";

import VideoCategoryForm from "../video/VideoCategoryForm";

class YoutubeItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { video } = this.props;
    console.log("youtubeitem", video);

    return (
      <div
        className="col-lg-4 col-md-4 mb-4 text-center"
        style={{ position: "relative" }}
      >
        <Link to={`youtube/video/${video.id.videoId}`}>
          <img src={video.snippet.thumbnails.medium.url} />
        </Link>
        <div className="title" style={{ color: "#fff", minHeight: "80px" }}>
          {video.snippet.title}
        </div>
        <VideoCategoryForm key={video.id.videoId} video={video} />
      </div>
    );
  }
}

export default YoutubeItem;
