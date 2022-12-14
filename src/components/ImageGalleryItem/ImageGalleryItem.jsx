const ImageGalleryItem = ({ image, openModal }) => {
  return (
    <li className="ImageGalleryItem" onClick={openModal}>
      <img
        src={image.webformatURL}
        alt={image.tags}
        className="ImageGalleryItem-image"
      />
    </li>
  );
};

export default ImageGalleryItem;
