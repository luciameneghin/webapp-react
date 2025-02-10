import FilmsCard from "../components/FilmsCard"
import { useGlobalContext } from "../../context/GlobalContext";
import { useEffect } from "react";

const HomePage = () => {
  const { films, fetchFilms } = useGlobalContext();

  const renderFilms = () => {
    return films.map(film => {
      return (
        <div className='col' key={film.id}>
          <FilmsCard film={film} />
        </div>
      )
    })
  }

  useEffect(fetchFilms, [])

  return (
    <div className="container mt-5">
      <h2 className="mb-3">Lista dei film</h2>
      <div className="row row-cols-5">
        {renderFilms()}
      </div>
    </div>
  )
}

export default HomePage
