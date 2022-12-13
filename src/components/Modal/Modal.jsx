import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#root-modal');

class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener('keydown', this.handleEscDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscDown);
  }

  handleEscDown = e => {
    if (e.code === 'Escape') {
      this.props.toggleModal();
    }
  };

  handleOverlayClick = e => {
    if (e.currentTarget !== e.target) {
      return;
    }

    this.props.toggleModal();
  };

  render() {
    const { bigImage } = this.props;
    return createPortal(
      <div className="Overlay" onClick={this.handleOverlayClick}>
        <div className="Modal">
          <img src={bigImage} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
