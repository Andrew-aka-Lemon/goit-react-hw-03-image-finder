import SearchBar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery';
const { Component } = require('react');

class App extends Component {
  state = {
    searchInput: '',
    images: [],
  };

  searchInputHandler = input => {
    this.setState({ searchInput: input });
  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.searchInputHandler} />
        <ImageGallery toSearch={this.state.searchInput} />
      </>
    );
  }
}

export { App };
