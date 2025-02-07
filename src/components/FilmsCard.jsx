

const FilmsCard = ({ film }) => {
  const { id, title, image, director, genre, release_year, abstract } = film;
  return (
    <div className="card mb-4">
      {image && <img src={image} alt={title} className="img-card" />}
      <div className="card-body">
        <div className="card-title">{title}</div>
        <address><i>By {director}</i></address>
        <p className="card-text">{abstract}</p>
        <p className="card-text">{genre}</p>
        <p className="card-text">{release_year}</p>
      </div>
    </div>
  );
};

export default FilmsCard;

