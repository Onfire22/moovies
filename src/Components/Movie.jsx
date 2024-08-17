import image from '../helpers/no-image.png';

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
        <img src={Poster === 'N/A' ? image : Poster} alt="poster" />
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