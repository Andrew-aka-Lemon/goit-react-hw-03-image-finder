const Modal = ({ bigImage, describe }) => {
  return (
    <div className="Overlay">
      <div className="Modal">
        <img src={bigImage} alt={describe} />
      </div>
    </div>
  );
};

export default Modal;
