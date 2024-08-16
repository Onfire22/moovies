import Movie from "./Movie";

const Movies = ({ cards }) => {
  return (
    <ul className="card_list">
      {cards.map((card) => {
        return <Movie key={card.imdbID} card={card} />
      })}
    </ul>
  );
};

export default Movies;