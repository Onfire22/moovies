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
      loading: true,
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get('http://www.omdbapi.com/?apikey=972a7760&s=matrix');
      this.setState({ cards: response.data.Search, loading: false, });
    } catch (e) {
      console.log(e);
    }
  }

  handleSearch = async (query, type) => {
    this.setState({ loading: true, })
    try {
      const response = await axios.get(getUrl(query, type));
      this.setState({ cards: response.data.Search, loading: false, });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { cards, loading } = this.state;
    return (
      <main className="container content">
        <Search handleSearch={this.handleSearch} />
        {loading
        ?
        <Preloader />
        :
        <Movies cards={cards} />}
      </main>
    );
  }
}

export default Main;