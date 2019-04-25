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
    console.log("get settings constructor", this.props.getSettings());
    // console.log('constructor props', this.props)

    this.state = {
      searcher: {
        term: "react redux advanced",
        amount: 5,
        visible: {
          amount: true,
          term: true
        }
      }
    };
    console.log("constructor", this.props);
    this.onChange = this.onChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log("derived state from props - props", props);
  //   console.log("derived state from props - state", state);

  //   if (props.settings !== undefined) {
  //     console.log("sett search state", props.settings.amount);
  //     return {
  //       searcher: {
  //         term: props.settings.term,
  //         amount: props.settings.amount,
  //         termVisible: true,
  //         amountVisible: true
  //       }
  //     };
  //   }
  //   return null;
  // }

  componentDidMount() {
    const searchData = this.props.settings;
    console.log("did mount", this.props);
    if (searchData) {
      this.setState({
        searcher: searchData
      });
    }
    this.props.setYoutubeSearcher(searchData);
    this.props.youtubeList(searchData);
  }

  onFormSubmit(e) {
    e.preventDefault();

    const searchData = {
      term: this.state.seracher.term,
      amount: this.state.searcher.amount
    };
    this.props.youtubeList(searchData);
    this.props.setYoutubeSearcher(searchData);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    console.log("render");
    const { searcher } = this.state;
    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-body">
            <form onSubmit={this.onFormSubmit}>
              {searcher.visible.term ? (
                <div className="form-group">
                  <TextFieldGroup
                    placeholder="Wyszukaj po frazie"
                    name="term"
                    value={searcher.term}
                    onChange={this.onChange}
                    // error={searcher.errors}
                  />
                </div>
              ) : null}
              {searcher.visible.amount ? (
                <div className="form-group">
                  <TextFieldGroup
                    placeholder="Ilość"
                    name="amount"
                    value={searcher.amount}
                    onChange={this.onChange}
                    // error={searcher.errors}
                  />
                </div>
              ) : null}
              {searcher.visible.term || searcher.visible.amount ? (
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
  settings: state.setting.settings.youtube,
  searcher: state.searcher.youtubeSearch
});

export default connect(
  mapStateToProps,
  { getSettings, setYoutubeSearcher, youtubeList }
)(YoutubeSearchBar);
