import React from 'react';
import '../css/SearchBar.css'

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className="wrap">
        <form onSubmit={this.onFormSubmit}>
          <div className="search">
            <input
              type="text" 
              className="searchTerm" 
              placeholder="Search" 
              value={this.state.term} 
              onChange={this.onInputChange}
            />
            <button type="submit" className="searchButton">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;