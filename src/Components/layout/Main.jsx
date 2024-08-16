import React from "react";
import axios from "axios";
import Movies from "../Movies";
import Preloader from "../Preloader";

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

  render() {
    const { cards } = this.state;
    return (
      cards.length > 0 
      ? 
      (<main className="container content">
        <Movies cards={cards} />
      </main>)
      :
      <Preloader />
    );
  }
}

export default Main;