import React, { Component } from "react";
import { createPortal } from "react-dom";
import style from "./Modal.css";

const modalRoot = document.querySelector('#modal-root');
class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillMount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { children } = this.props;
    const backdropClick = this.handleBackdropClick;

    return createPortal(
      <div className={style.Overlay} onClick={backdropClick}>
        <div className={style.Modal}>{children}</div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;