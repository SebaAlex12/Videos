import React, { Component } from "react";
import SettingForm from "./SettingForm";

class SettingMain extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <SettingForm />
          </div>
        </div>
      </div>
    );
  }
}

export default SettingMain;
