import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import TextFieldGroup from "../common/TextFieldGroup";
import { getSettings } from "../../actions/settingActions";
import { youtubeList } from "../../actions/youtubeActions";
import { setYoutubeSearcher } from "../../actions/youtubeSearcherActions";

class YoutubeSearchBar extends Component {
  constructor(props) {
    super(props);

    this.props.getSettings();
    // const { searcher } = this.props;
    // const { settings } = this.props;

    this.state = {
      term: "react redux advanced",
      termUserVisible: true,
      amountUserVisible: true,
      maxResults: 5
    };

    this.onChange = this.onChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount() {
    const { searcher } = this.props;
    const searchData = this.state;
    console.log("did mount", this.props);
    this.props.youtubeList(searchData);
  }

  onFormSubmit(e) {
    e.preventDefault();

    const searchData = {
      term: this.state.term,
      maxResults: this.state.maxResults
    };
    this.props.youtubeList(searchData);
    this.props.setYoutubeSearcher(searchData);
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
              {this.state.termUserVisible ? (
                <div className="form-group">
                  <TextFieldGroup
                    placeholder="Wyszukaj po frazie"
                    name="term"
                    value={this.state.term}
                    onChange={this.onChange}
                    // error={this.state.errors}
                  />
                </div>
              ) : null}
              {this.state.amountUserVisible ? (
                <div className="form-group">
                  <TextFieldGroup
                    placeholder="Ilość"
                    name="maxResults"
                    value={this.state.maxResults}
                    onChange={this.onChange}
                    // error={this.state.errors}
                  />
                </div>
              ) : null}
              {this.state.termUserVisible || this.state.amountUserVisible ? (
                <input type="submit" value="wyszukaj" />
              ) : null}
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

const mapStateToProps = state => ({
  settings: state.setting.settings,
  searcher: state.searcher.youtubeSearch
});

export default connect(
  mapStateToProps,
  { getSettings, setYoutubeSearcher, youtubeList }
)(YoutubeSearchBar);
