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
    <div>
      <h3>Lista dei film</h3>
      <div className="row row-cols-3">
        {renderFilms()}
      </div>
    </div>
  )
}

export default HomePage
