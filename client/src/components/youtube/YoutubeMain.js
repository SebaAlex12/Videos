import React, { Component } from "react";
import YoutubeSearchBar from "./YoutubeSearchBar";
import YoutubeList from "./YoutubeList";
import { connect } from "react-redux";

class YoutubeMain extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <YoutubeSearchBar />
            <YoutubeList />
          </div>
        </div>
      </div>
    );
  }
}

export default YoutubeMain;
