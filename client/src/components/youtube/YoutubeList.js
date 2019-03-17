import React, { Component } from "react";
import { connect } from "react-redux";
import YoutubeItem from "./YoutubeItem";
import Spinner from "../common/spinner";

class YoutubeList extends Component {
  render() {
    // console.log(this.props.videos);
    const { videos } = this.props;
    let videosContent;

    // console.log(videos);

    if (videos === null || videos.length === 0) {
      videosContent = <Spinner />;
    } else {
      videosContent = videos.map(video => (
        <YoutubeItem key={video.etag} video={video} />
      ));
    }

    // this.props.videos.map(video => {
    //   console.log(video);
    // });

    return (
      <div>
        <div className="row">{videosContent}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  videos: state.youtube.youtubeVideos
});

export default connect(mapStateToProps)(YoutubeList);
