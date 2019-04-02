import React, { Component } from "react";
import { connect } from "react-redux";

import SettingForm from "./SettingForm";
import { getSettings } from "../../actions/settingActions";

class SettingMain extends Component {
  componentWillMount() {
    this.props.getSettings();
  }
  render() {
    // console.log(this.props)
    if (this.props.setting.settings) {
      const content = <SettingForm />;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12" />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { getSettings }
)(SettingMain);
