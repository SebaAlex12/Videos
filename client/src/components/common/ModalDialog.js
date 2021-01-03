import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalDialog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, content } = this.props;
    return ReactDOM.createPortal(
      <Modal
        isOpen={this.props.isOpen}
        className={this.props.className}
        size={this.props.size}
        onClick={e => e.stopPropagation()}
      >
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>{content}</ModalBody>
        <ModalFooter>{this.props.actions}</ModalFooter>
      </Modal>,
      document.querySelector("#modalDialog")
    );
  }
}

export default ModalDialog;
