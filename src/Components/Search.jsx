import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
    this.handleSearch = props.handleSearch;
  }

  handleInput = (e) => {
    const { value } = e.target;
    this.setState({ search: value });
  }

  handleKey = ({ key }) => {
    const { search } = this.state;
    if (!search) {
      return;
    }
    if (key === 'Enter') {
      this.handleSearch(search);
    }
  }
  
  render() {
    const { search } = this.state;
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
              onClick={() => this.handleSearch(search)}
              className="btn searchBtn blue darken-1"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;