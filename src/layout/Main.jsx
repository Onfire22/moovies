import React from "react";
import axios from "axios";
import getUrl from "../helpers/urlBuilder";
import Movies from "../Components/Movies";
import Preloader from "../Components/Preloader";
import Search from "../Components/Search";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get('http://www.omdbapi.com/?apikey=972a7760&s=matrix');
      this.setState({ cards: response.data.Search });
    } catch (e) {
      console.log(e);
    }
  }

  handleSearch = async (query) => {
    try {
      const response = await axios.get(getUrl(query));
      this.setState({ cards: response.data.Search });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { cards } = this.state;
    return (
      <main className="container content">
        <Search handleSearch={this.handleSearch} />
        {cards
        ? 
        <Movies cards={cards} />
        :
        <Preloader />}
      </main>
    );
  }
}

export default Main;