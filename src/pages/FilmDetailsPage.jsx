import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import ReviewsCard from "../components/ReviewsCard";
import Stars from "../components/Stars";
import { Link } from "react-router-dom";
import ReviewForm from "../components/ReviewForm";

const FilmDetailsPage = () => {
  const { id } = useParams();
  const { film, fetchFilm } = useGlobalContext();

  useEffect(() => {
    fetchFilm(id);
  }, [id]);


  return (
    <div className="container mt-5 border-bottom border-1">
      <header>
        <h2>Dettagli del Film</h2>
        <div className="d-flex">
          <img className="w-25" src={film?.image} alt={film?.title} />
          <div className="p-4">
            <h1>{film?.title}</h1>
            <h3>{film?.director}</h3>
            <p>{film?.abstract}</p>
            <div><Stars /></div>
          </div>
        </div>
      </header>

      <section className="film-reviews">
        <h3>Recensioni</h3>
        {film?.reviews && (
          <ReviewsCard data={film?.reviews} />
        )}
      </section>

      <section>
        {film && (
          <ReviewForm movie_id={id} fetchData={fetchFilm} />
        )}
      </section>

      <footer>
        <Link to='/' className='btn btn-primary'>Ritorna all'elenco</Link>
      </footer>
    </div>
  );
};

export default FilmDetailsPage;



