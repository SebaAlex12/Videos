import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import TextFieldGroup from "../common/TextFieldGroup";
import { youtubeList } from "../../actions/youtubeActions";

class YoutubeSearchBar extends Component {
  constructor(props) {
    super(props);

    const { youtube } = this.props.settings;

    this.state = {
      term: "react redux",
      maxResults: 45,
      termUserVisible: true,
      amountUserVisible: true
      // term: "songs",
      // maxResults: 5,
      // termUserVisible: true,
      // amountUserVisible: true
      // errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

    // console.log(this.state);
  }

  componentDidMount() {
    const searchData = {
      term: this.state.term,
      maxResults: this.state.maxResults,
      termUserVisible: this.state.termUserVisible,
      amountUserVisible: this.state.amountUserVisible
    };
    this.props.youtubeList(searchData);
  }

  onFormSubmit(e) {
    e.preventDefault();

    const searchData = {
      term: this.state.term,
      maxResults: this.state.maxResults,
      termUserVisible: this.state.termUserVisible,
      amountUserVisible: this.state.amountUserVisible
    };
    this.props.youtubeList(searchData);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.settings) {
  //     const { youtube } = nextProps.settings;
  //     this.setState({
  //       term: youtube.term,
  //       amount: youtube.amount,
  //       termUserVisible: true,
  //       amountUserVisible: true,
  //       childrenProtectionOn: youtube.childrenProtectionOn,
  //       childrenProtectionOff: youtube.childrenProtectionOff,
  //       termChildrenVisible: youtube.termChildrenVisible,
  //       amountChildrenVisible: youtube.amountChildrenVisible
  //     });
  //   }
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
  settings: state.setting.settings
});

export default connect(
  mapStateToProps,
  { youtubeList }
)(YoutubeSearchBar);
