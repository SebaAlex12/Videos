import React, { Component } from "react";
// import VideoSearchBar from "./VideoSearchBar";
import Videos from "./Videos";
import CategoryList from "../category/CategoryList";

class VideoMain extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <CategoryList />
            {/* <VideoSearchBar /> */}
            <Videos />
          </div>
        </div>
      </div>
    );
  }
}

export default VideoMain;
