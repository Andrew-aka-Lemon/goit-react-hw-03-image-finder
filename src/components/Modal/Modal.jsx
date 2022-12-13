const Modal = ({ bigImage }) => {
  return (
    <div className="Overlay">
      <div className="Modal">
        <img src={bigImage} alt="" />
      </div>
    </div>
  );
};

export default Modal;
