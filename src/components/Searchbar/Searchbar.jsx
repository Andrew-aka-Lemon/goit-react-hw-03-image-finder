import PropTypes from 'prop-types';
import { Component } from 'react';

class SearchBar extends Component {
  state = {
    input: '',
  };

  inputHandler = e => {
    const { value } = e.currentTarget;
    this.setState({ input: value });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.input.toLowerCase());

    this.setState({ input: '' });
  };

  render() {
    return (
      <header className="Searchbar" onSubmit={this.submitHandler}>
        <form className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.inputHandler}
            value={this.state.input}
          />
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
