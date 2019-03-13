import React, { Component } from "react";
import YoutubeSearchBar from "./YoutubeSearchBar";
import YoutubeList from "./YoutubeList";
import { connect } from "react-redux";

class YoutubeMain extends Component {
  render() {
    return (
      <div>
        <YoutubeSearchBar />
        <YoutubeList />
      </div>
    );
  }
}

export default YoutubeMain;
