import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const api_url = import.meta.env.VITE_API_URL;
  const [films, setFilms] = useState([]);
  const [film, setFilm] = useState(null);

  const fetchFilms = () => {
    axios.get(`${api_url}/api/movies`)
      .then(res => {
        setFilms(res.data);
      })
      .catch(error => {
        console.error("errore:", error);
      });
  };


  const fetchFilm = (id) => {
    axios
      .get(`${api_url}/api/movies/${id}`)
      .then((res) => {
        setFilm(res.data);
      })
      .catch((error) => {
        console.error("Errore nel caricare il film:", error);
      });
  };




  useEffect(() => {
    fetchFilms();
  }, []);

  const value = {
    films,
    fetchFilms,
    film,
    fetchFilm
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
