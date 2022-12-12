const ImageGalleryItem = ({ arrayOfImages }) => {
  return arrayOfImages.map(({ id, largeImageURL, webformatURL, tags }) => {
    return (
      <li key={id} className="ImageGalleryItem">
        <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
      </li>
    );
  });
};

export default ImageGalleryItem;
