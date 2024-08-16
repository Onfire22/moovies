const Movie = ({ card }) => {
  const { 
    Poster,
    Title,
    Type,
    Year,
  } = card;

  return (
    <li className="card">
      <div className="card-image">
        <img src={Poster} alt="poster" />
        <span className="card-title">{Title}</span>
      </div>
      <div className="card-content">
        <p>{Type}</p>
        <p>{Year}</p>
      </div>
    </li>
  );
};

export default Movie;