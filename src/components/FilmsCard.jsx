import { Link } from "react-router-dom";

const FilmsCard = ({ film }) => {
  const { title, image, director, genre, release_year } = film;

  return (
    <Link to={`/film/${film.id}`} className="card mb-4 text-decoration-none">
      {image && <img src={image} alt={title} className="img-card" />}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <address><i>By {director}</i></address>
        <p className="card-text">{genre}</p>
        <p className="card-text">{release_year}</p>
      </div>
    </Link>
  );
};

export default FilmsCard;

