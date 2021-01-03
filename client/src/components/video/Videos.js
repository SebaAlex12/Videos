import React, { Component } from "react";
import { connect } from "react-redux";
import VideoItem from "./VideoItem";
import Spinner from "../common/spinner";
import { getVideos } from "../../actions/videoActions";

class Videos extends Component {
  componentDidMount() {
    this.props.getVideos();
  }

  render() {
    const { videos, currentCategory } = this.props;
    // console.log("videos", currentCategory);

    let videosContent;

    if (videos === null || videos.length === 0) {
      videosContent = <Spinner />;
    } else {
      videosContent = videos.map(video =>
        video.catId === currentCategory._id ? (
          <VideoItem key={video._id} video={video} />
        ) : null
      );
    }

    return (
      <div>
        <div className="row">{videosContent}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  videos: state.video.videos,
  currentCategory: state.video.category
});

export default connect(
  mapStateToProps,
  { getVideos }
)(Videos);
