import { Component } from 'react';

import ImageGalleryItem from 'components/ImageGalleryItem';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Modal from 'components/Modal';

class ImageGallery extends Component {
  state = {
    error: null,
    images: [],
    currentPage: 1,
    totalPages: null,
    modalOpened: false,
    largeImage: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps) {
    const { toSearch, currentPage } = this.props;
    if (
      prevProps.toSearch === toSearch &&
      prevProps.currentPage === currentPage
    ) {
      return;
    }

    this.setState({ status: 'pending' });

    fetch(
      `https://pixabay.com/api/?q=${toSearch}&page=${this.state.currentPage}&key=30621712-67ba58dcdbb82dbab3da918bc&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.total === 0) {
          return Promise.reject(
            new Error(`Картинок по запросу ${toSearch} не найдено`)
          );
        }
        console.log(data);
        this.setState(({ images }) => {
          return {
            images: [...images, ...data.hits],
            status: 'ready',
            totalPages: Math.ceil(data.totalHits / 12),
          };
        });
      })
      .catch(error => {
        this.setState({ error, status: 'rejected' });
      });
  }

  loadMoreHandler = () => {
    const { currentPage, totalPages } = this.state;

    if (currentPage >= totalPages) {
      return;
    }

    this.setState(prevState => {
      return { status: 'pending', currentPage: prevState.currentPage + 1 };
    });
  };

  onImageClick = Image => {
    this.setState(({ modalOpened }) => {
      return {
        modalOpened: !modalOpened,
        largeImage: Image,
      };
    });
  };

  toggleModal = () => {
    this.setState(prevState => {});
  };

  render() {
    if (this.state.status === 'idle') {
      return (
        <h1 style={{ textAlign: 'center' }}>
          What do you want to look on ? Put the search above
        </h1>
      );
    }

    if (this.state.status === 'pending') {
      return <Loader />;
    }

    if (this.state.status === 'ready') {
      return (
        <>
          <ul className="ImageGallery">
            <ImageGalleryItem
              arrayOfImages={this.state.images}
              openModal={this.onImageClick}
            />
          </ul>
          <Button clickHandler={this.loadMoreHandler} />
          {this.state.modalOpened && <Modal bigImage={this.state.largeImage} />}
        </>
      );
    }

    if (this.state.status === 'rejected') {
      return (
        <h1 style={{ textAlign: 'center', color: 'red' }}>
          {this.state.error.message}
        </h1>
      );
    }
  }
}

export default ImageGallery;
