import { useEffect, useState } from "react";
import axios from "axios";
import { buildInitialUrl, buildQueryUrl } from "../helpers/urlBuilders";
import Movies from "../Components/Movies";
import Preloader from "../Components/Preloader";
import Search from "../Components/Search";

const Main = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCards = async () => {
      try {
        const response = await axios.get(buildInitialUrl());
        setCards(response.data.Search);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    getCards();
  }, []);

  const handleSearch = async (query, type) => {
    setLoading(true);
    try {
      const response = await axios.get(buildQueryUrl(query, type));
      setCards(response.data.Search);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <main className="container content">
      <Search handleSearch={handleSearch} />
      {loading
      ?
      <Preloader />
      :
      <Movies cards={cards} />}
    </main>
  );
};

export default Main;