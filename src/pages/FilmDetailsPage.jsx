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

  let totalVotes = 0;
  if (film?.reviews && film.reviews.length > 0) {
    film.reviews.forEach(review => {
      totalVotes += review.vote;
    });
  }

  const averageVote = film?.reviews && film.reviews.length > 0 ? totalVotes / film.reviews.length : 0;

  useEffect(() => {
    fetchFilm(id);
  }, [id]);

  return (
    <div className="container mt-5">
      <section>
        <h2 className="mb-4">Dettagli del Film</h2>
        <div className="d-flex">
          <img className="w-25" src={film?.image} alt={film?.title} />
          <div className="p-4 align-content-center">
            <h1>{film?.title}</h1>
            <h5 className="mb-5"><i>Directed by: </i>{film?.director}</h5>
            <p>{film?.abstract}</p>
            <div><Stars vote={averageVote} /></div>
          </div>
        </div>
      </section>

      <section className="film-reviews my-5">
        <h3>Recensioni</h3>
        {film?.reviews && (
          <ReviewsCard data={film.reviews} />
        )}
      </section>

      <section>
        {film && (
          <ReviewForm movie_id={id} fetchData={fetchFilm} />
        )}
      </section>

      <footer>
        <div className="text-end mb-5">
          <Link to='/' className='btn px-5'>Ritorna all'elenco</Link>
        </div>
      </footer>
    </div>
  );
};

export default FilmDetailsPage;



