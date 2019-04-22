import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

import ModalDialog from "../common/ModalDialog";
import VideoItemIframe from "../video/VideoItemIframe";
import { getYoutubeByLink, youtubeList } from "../../actions/youtubeActions";

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
    // console.log(videoSrc);

    // const data = this.props.getYoutubeByLink({ link: videoSrc });

    // console.log("data", data);

    // console.log("ldldldldldl");

    // axios
    //   .get(videoSrc, {
    //     method: "GET",
    //     mode: "no-cors",
    //     headers: {
    //       "Access-Control-Allow-Origin": "*",
    //       "Content-Type": "application/json"
    //     },
    //     withCredentials: true,
    //     credentials: "same-origin"
    //   })
    //   .then(resp => {
    //     let src = resp.data;
    //     console.log("src", src);
    //   });

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

export default connect(
  null,
  { getYoutubeByLink, youtubeList }
)(YoutubeItemPopup);
