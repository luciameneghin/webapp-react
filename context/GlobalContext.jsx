import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const api_url = import.meta.env.VITE_API_URL;
  console.log(api_url);
  const [films, setFilms] = useState([]);

  const fetchFilms = () => {
    axios.get(`${api_url}`)
      .then(res => {
        setFilms(res.data);

      })
      .catch(error => {
        console.error("errore:", error);
      });
  };

  useEffect(() => {
    fetchFilms();
  }, []);

  const value = {
    films,
    fetchFilms
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
