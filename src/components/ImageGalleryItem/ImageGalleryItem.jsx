const ImageGalleryItem = ({ arrayOfImages, openModal }) => {
  return arrayOfImages.map(({ id, largeImageURL, webformatURL, tags }) => {
    return (
      <li
        key={id}
        className="ImageGalleryItem"
        onClick={() => {
          openModal(largeImageURL);
        }}
      >
        <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
      </li>
    );
  });
};

export default ImageGalleryItem;
