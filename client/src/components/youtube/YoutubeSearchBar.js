import React, { Component } from "react";
import TextFieldGroup from "../common/TextFieldGroup";
import { youtubeList } from "../../actions/youtubeActions";

import PropTypes from "prop-types";
import { connect } from "react-redux";

class YoutubeSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
      // errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();
    const searchData = {
      term: this.state.term
    };
    this.props.youtubeList(searchData);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-body">
            <form onSubmit={this.onFormSubmit}>
              <div className="form-group">
                <TextFieldGroup
                  placeholder="Wyszukaj filmy"
                  name="term"
                  value={this.state.term}
                  onChange={this.onChange}
                  // error={this.state.errors}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
YoutubeSearchBar.propTypes = {
  youtubeList: PropTypes.func.isRequired
};

export default connect(
  null,
  { youtubeList }
)(YoutubeSearchBar);
