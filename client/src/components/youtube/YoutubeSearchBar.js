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

    // this.props.getSettings();
    const { searcher } = this.props;
    const { settings } = this.props;

    // console.log("searcher", searcher);
    // console.log("settings", settings);

    const defaultSettings = {
      term: settings.youtube.term
        ? settings.youtube.term
        : "react redux advanced",
      maxResult: settings.youtube.maxResult ? settings.youtube.maxResult : "5",
      termUserVisible: settings.youtube.termUserVisible
        ? settings.youtube.termUserVisible
        : true,
      amountUserVisible: settings.youtube.amountUserVisible
        ? settings.youtube.amountUserVisible
        : true
    };

    this.state = {
      term: searcher.term ? searcher.term : defaultSettings.term,
      maxResults: searcher.maxResults
        ? searcher.maxResults
        : defaultSettings.maxResult,
      termUserVisible: searcher.termUserVisible
        ? searcher.termUserVisible
        : defaultSettings.termUserVisible,
      amountUserVisible: searcher.amountUserVisible
        ? searcher.amountUserVisible
        : defaultSettings.amountUserVisible
    };

    this.onChange = this.onChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentWillMount() {}

  componentDidMount() {
    const { searcher } = this.props;
    let searchData = {};

    searchData = {
      term: searcher.term ? searcher.term : "react redux advanced",
      maxResults: searcher.maxResults ? searcher.maxResults : "5",
      termUserVisible: searcher.termUserVisible
        ? searcher.termUserVisible
        : true,
      amountUserVisible: searcher.amountUserVisible
        ? searcher.amountUserVisible
        : true
    };

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

  // componentWillReceiveProps() {
  //   const { settings } = this.props;
  //   const { searcher } = this.props;

  //   if (searcher.length === 0 && settings) {
  //     console.log(settings);
  //     this.setState({
  //       term: settings.term,
  //       maxResult: settings.maxResult,
  //       termUderVisible: settings.termUserVisible,
  //       amountUserVisible: settings.amountUserVisible
  //     });
  //   }
  //   console.log(this.state);
  // }

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
