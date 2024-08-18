import { useState } from "react";

const Search = ({ handleSearch }) => {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('');

  const handleInput = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const handleKey = ({ key }) => {
    if (!search) {
      return;
    }
    if (key === 'Enter') {
      handleSearch(search, type);
    }
  };

  const handleRadio = (e) => {
    const { value } = e.target;
    setType(value);
    handleSearch(search, value);
  };
  
  return(
    <div className="row">
      <div className="col s12">
        <div className="input-field">
          <input
            type="search"
            className="validate"
            placeholder="Search a movie"
            value={search}
            onChange={handleInput}
            onKeyDown={(e) => handleKey(e)}
          />
          <button 
            onClick={() => handleSearch(search, type)}
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
              onChange={handleRadio}
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
              onChange={handleRadio}
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
              onChange={handleRadio}
              checked={type === 'series'}
            />
            <span>Series</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Search;