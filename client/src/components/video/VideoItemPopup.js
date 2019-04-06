import React, { Component } from "react";
import { Link } from "react-router-dom";

import ModalDialog from "../common/ModalDialog";
import VideoItemIframe from "../video/VideoItemIframe";
import history from "../../history";

class VideoItemPopup extends Component {
  renderActions() {
    console.log("viditem", this.props);
    return (
      <React.Fragment>
        <Link
          to="/videos"
          color="secondary"
          className="btn btn-primary pull-right"
        >
          Zamknij
        </Link>
      </React.Fragment>
    );
  }
  renderContent() {
    const { key } = this.props.match.params;
    const videoSrc = `https://youtube.com/embed/${key}`;

    return (
      <ModalDialog
        isOpen={true}
        title={"Wideo"}
        size="lg"
        content={
          <VideoItemIframe source={videoSrc} width="100%" height="350" />
        }
        actions={this.renderActions()}
      />
    );
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default VideoItemPopup;
