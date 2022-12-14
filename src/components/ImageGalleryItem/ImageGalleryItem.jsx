import PropTypes from 'prop-types';

const ImageGalleryItem = ({ image, openModal }) => {
  return (
    <li
      className="ImageGalleryItem"
      onClick={() => {
        openModal(image.largeImageURL);
      }}
    >
      <img
        src={image.webformatURL}
        alt={image.tags}
        className="ImageGalleryItem-image"
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    tags: PropTypes.string,
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
