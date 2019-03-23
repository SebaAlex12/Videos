import React, { Component } from "react";
import { connect } from "react-redux";

import YoutubeSearchBar from "./YoutubeSearchBar";
import YoutubeList from "./YoutubeList";
import CategoryForm from "../category/CategoryForm";
import CategoryList from "../category/CategoryList";

class YoutubeMain extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <CategoryForm />
            <CategoryList />
            <YoutubeSearchBar />
            <YoutubeList />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null)(YoutubeMain);
