import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const api_url = import.meta.env.VITE_API_URL;
  const [films, setFilms] = useState([]);
  const [film, setFilm] = useState(null);

  const [isLoading, setIsLoading] = useState(false)


  //recupero tutti i film
  const fetchFilms = () => {
    setIsLoading(true)
    axios.get(`${api_url}/api/movies`)
      .then(res => {
        setFilms(res.data);
      })
      .catch(error => {
        console.error("errore:", error);
      })
      .finally(() => setIsLoading(false))
  };

  //recupero 1 film
  const fetchFilm = (id) => {
    setIsLoading(true)
    axios
      .get(`${api_url}/api/movies/${id}`)
      .then((res) => {
        setFilm(res.data);
      })
      .catch((error) => {
        console.error("Errore nel caricare il film:", error);
      })
      .finally(() => setIsLoading(false))
  };
  //eliminare il film
  const deleteFilm = (id, cb) => {
    setIsLoading(true)
    axios.delete(`${api_url}/api/movies/${id}`)
      .then(res => cb())
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
  }


  useEffect(() => {
    fetchFilms();
  }, []);

  const value = {
    films,
    fetchFilms,
    film,
    fetchFilm,
    deleteFilm,
    isLoading,
    setIsLoading
  };

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalProvider, useGlobalContext };
