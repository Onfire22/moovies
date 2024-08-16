const Movie = ({ card }) => {
  const { 
    Poster,
    Title,
    Type,
    Year,
  } = card;

  // ToDo: no image 

  return (
    <li className="card">
      <div className="card-image">
        <img src={Poster} alt="poster" />
      </div>
      <p className="card-title">{Title}</p>
      <div className="card-content">
        <p>{Type}</p>
        <p>{Year}</p>
      </div>
    </li>
  );
};

export default Movie;