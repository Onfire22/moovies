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
              onKeyDown={(e) => this.handleSearch(e, search)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;