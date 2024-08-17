import Movie from "./Movie";

const Movies = ({ cards = [] }) => {
  return (
    <ul className="card_list">
      {cards.length ? cards.map((card) => {
        return <Movie key={card.imdbID} card={card} />
      }) : <h4>Nothing found</h4>}
    </ul>
  );
};

export default Movies;