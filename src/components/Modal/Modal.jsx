import { Component } from 'react';

class Modal extends Component {
  state = {};

  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    const { bigImage } = this.props;
    return (
      <div className="Overlay">
        <div className="Modal">
          <img src={bigImage} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
