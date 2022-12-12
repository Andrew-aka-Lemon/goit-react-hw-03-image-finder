import SearchBar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery';
import { Component } from 'react';

class App extends Component {
  state = {
    searchInput: '',
    largeImage: '',
  };

  searchInputHandler = input => {
    this.setState({ searchInput: input });
  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.searchInputHandler} />
        {this.state.searchInput !== '' && (
          <ImageGallery toSearch={this.state.searchInput} />
        )}
      </>
    );
  }
}

export { App };
