import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import ModalDialog from "../common/ModalDialog";
import VideoItemIframe from "../video/VideoItemIframe";

class YoutubeItemPopup extends Component {
  renderActions() {
    return (
      <React.Fragment>
        <Link
          to="/youtube"
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
    console.log(videoSrc);
    let src;

    axios.get(videoSrc, { crossdomain: true }).then(resp => {
      src = resp.data;
    });

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

export default YoutubeItemPopup;
