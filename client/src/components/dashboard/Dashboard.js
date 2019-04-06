import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSettings } from "../../actions/settingActions";

class Dashboard extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated === false) {
      this.props.history.push("/");
    }
    this.props.getSettings();
  }
  render() {
    return (
      <div className="dashboard-box">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Videos</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getSettings }
)(Dashboard);
