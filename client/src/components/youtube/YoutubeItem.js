import React, { Component } from "react";
import VideoCategoryForm from "../video/VideoCategoryForm";

class YoutubeItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { video } = this.props;
    const videoSrc = `http://youtube.com/embed/${video.id.videoId}`;

    return (
      <div
        className="col-lg-4 col-md-4 mb-4 text-center"
        style={{ position: "relative" }}
      >
        <iframe allowFullScreen="allowFullScreen" src={videoSrc} />
        <div className="title" style={{ color: "#fff", minHeight: "80px" }}>
          {video.snippet.title}
        </div>
        <VideoCategoryForm key={video.id.videoId} video={video} />
      </div>
    );
  }
}

export default YoutubeItem;
