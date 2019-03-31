import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

import ModalDialog from "../common/ModalDialog";
import { getVideo, deleteVideo } from "../../actions/videoActions";

class VideoItemDelete extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getVideo(this.props.id);
  }
  videoDelete(id) {
    this.props.deleteVideo(id);
  }
  renderActions() {
    const { video } = this.props;
    return (
      <React.Fragment>
        <Button color="primary" onClick={() => this.videoDelete(this.props.id)}>
          Usuń
        </Button>
        <Link to="/videos" color="secondary">
          Anuluj
        </Link>
      </React.Fragment>
    );
  }
  renderContent() {
    console.log("viddeleterender", this.props);
    return (
      <ModalDialog
        isOpen={true}
        title={"Usuń video"}
        description={`Czy napewno chcesz usunąć film o nazwie`}
        actions={this.renderActions()}
      />
    );
  }
  render() {
    console.log("render", this.props);
    return <div>{this.renderContent()}</div>;
  }
}

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.match.params.id
});

export default connect(
  mapStateToProps,
  { getVideo, deleteVideo }
)(VideoItemDelete);
