import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

import isEmpty from "../../validation/is-empty";
import ModalDialog from "../common/ModalDialog";
import VideoItemIframe from "../video/VideoItemIframe";
import { getYoutubeByLink, youtubeList } from "../../actions/youtubeActions";

class YoutubeItemPopup extends Component {
  constructor(props) {
    super(props);

    const { key } = this.props.match.params;
    const videoSrc = `https://youtube.com/embed/${key}`;

    this.props.getYoutubeByLink({ link: videoSrc });
  }
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

    // console.log(this.props);
    // const videoSrc = {
    //   data: null
    // };
    // if (!isEmpty(this.props.yt)) {
    //   console.log(this.props.yt);
    // }

    // const videoSrc = !isEmpty(this.props.yt) ? [this.props.yt] : null;

    // console.log(videoSrc);

    // const src = this.createCORSRequest("get", videoSrc);

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

const mapStateToProps = state => ({
  yt: state.youtube.yt
});

export default connect(
  mapStateToProps,
  { getYoutubeByLink, youtubeList }
)(YoutubeItemPopup);
