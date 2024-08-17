import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      type: '',
    };
    this.handleSearch = props.handleSearch;
  }

  handleInput = (e) => {
    const { value } = e.target;
    this.setState({ search: value });
  }

  handleKey = ({ key }) => {
    const { search, type } = this.state;
    if (!search) {
      return;
    }
    if (key === 'Enter') {
      this.handleSearch(search, type);
    }
  }

  handleRadio = (e) => {
    const { value } = e.target;
    this.setState({ type: value });
  }
  
  render() {
    const { search, type } = this.state;
    return(
      <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input
              type="search"
              className="validate"
              placeholder="Search a movie"
              value={search}
              onChange={this.handleInput}
              onKeyDown={(e) => this.handleKey(e)}
            />
            <button 
              onClick={() => this.handleSearch(search, type)}
              className="btn searchBtn blue darken-1"
            >
              Search
            </button>
          </div>
          <div className="radio_container">
            <label>
              <input
                className="with-gap"
                name="group3"
                type="radio"
                value=""
                onChange={this.handleRadio}
                checked={!type}
                />
              <span>All</span>
            </label>
            <label>
              <input
                className="with-gap"
                name="group3"
                type="radio"
                value="movie"
                onChange={this.handleRadio}
                checked={type === 'movie'}
              />
              <span>Movies</span>
            </label>
            <label>
              <input
                className="with-gap"
                name="group3"
                type="radio"
                value="series"
                onChange={this.handleRadio}
                checked={type === 'series'}
              />
              <span>Series</span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;