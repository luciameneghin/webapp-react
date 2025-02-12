import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import ReviewsCard from "../components/ReviewsCard";
import Stars from "../components/Stars";
import { Link } from "react-router-dom";
import ReviewForm from "../components/ReviewForm";

const FilmDetailsPage = () => {
  const { id } = useParams();
  const { film, fetchFilm, deleteFilm } = useGlobalContext();
  const redirect = useNavigate()

  useEffect(() => {
    fetchFilm(id);
  }, [id]);

  return (
    <div className="container mt-5">
      <section>
        <h3 className="mb-4">Dettagli del Film</h3>
        <div className="d-flex">
          <img className="w-25" src={film?.image} alt={film?.title} />
          <div className="p-4 align-content-center description">
            <h2>{film?.title}</h2>
            <h5 className="mb-5"><i>Directed by: </i>{film?.director}</h5>
            <p>{film?.abstract}</p>
            <div><Stars film={film} /></div>
            <button className='btn btn-delete my-3' onClick={() => {
              if (window.confirm('Sei sicuro di voler eliminare il film dal DataBase?')) {
                deleteFilm(film?.id, redirect('/'))
              }
            }}><i className="bi bi-trash3"></i>Elimina</button>
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



