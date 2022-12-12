// import { Rings } from 'react-loader-spinner';
import { Component } from 'react';
import { Dna } from 'react-loader-spinner';

import ImageGalleryItem from '../ImageGalleryItem';

class ImageGallery extends Component {
  state = {
    error: {},
    images: [],
    currentPage: 1,
    status: 'pending',
  };

  componentDidMount() {
    const { toSearch } = this.props;

    this.setState({ status: 'pending' });

    setTimeout(() => {
      fetch(
        `https://pixabay.com/api/?q=${toSearch}&page=${this.state.currentPage}&key=30621712-67ba58dcdbb82dbab3da918bc&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error('Smth went wrong'));
        })
        .then(data => {
          this.setState({ images: data.hits });
          this.setState({ status: 'ready' });
        })
        .catch(error => {
          this.setState({ error, status: 'rejected' });
        });
    }, 3000);
  }

  render() {
    if (this.state.status === 'idle') {
      return (
        <h1 style={{ textAlign: 'center' }}>
          What do you want to look on ? Put the search above
        </h1>
      );
    }

    if (this.state.status === 'pending') {
      return (
        <Dna
          visible={true}
          height="180"
          width="180"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      );
    }

    if (this.state.status === 'ready') {
      return (
        <ul className="ImageGallery">
          <ImageGalleryItem arrayOfImages={this.state.images} />
        </ul>
      );
    }

    if (this.state.status === 'rejected') {
      <h1 style={{ textAlign: 'center', color: 'red' }}>
        {this.state.error.message}
      </h1>;
    }
  }
}

export default ImageGallery;
