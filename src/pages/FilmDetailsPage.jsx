import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";
import ReviewsCard from "../components/ReviewsCard";

const FilmDetailsPage = () => {
  const { id } = useParams(); // Ottieni l'id dalla URL
  const { film, fetchFilm } = useGlobalContext();

  // Effettua la chiamata per caricare il film appena l'id cambia
  useEffect(() => {
    console.log(`caricamento del film tramite id:`, id);
    fetchFilm(id);  // Effettua la chiamata API per caricare il film
  }, [id]);

  console.log("Film caricato:", film);  // Log per vedere i dati ricevuti

  if (!film) {
    return <p>Caricamento in corso...</p>;  // Mostra "caricamento" finché il film non è caricato
  }

  return (
    <div className="container mt-5 border-bottom border-1">
      <header>
        <h2>Dettagli del Film</h2>
        <div className="d-flex">
          <img src={film.image_path} alt={film.title} />
          <div className="p-4">
            <h1>{film.title}</h1>
            <h3>{film.director}</h3>
            <p>{film.abstract}</p>
          </div>
        </div>
      </header>

      <section>
        {film.reviews && film.reviews.length > 0 ? (
          film.reviews.map((review) => <ReviewsCard key={review.id} review={review} />)
        ) : (
          <p>Non ci sono recensioni per questo film.</p>
        )}
      </section>
    </div>
  );
};

export default FilmDetailsPage;



