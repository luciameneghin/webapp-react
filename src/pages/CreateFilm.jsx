import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { useGlobalContext } from "../context/GlobalContext";

const CreateFilm = () => {
  const api_url = `${import.meta.env.VITE_API_URL}/api/movies/`;
  const genres = ['Azione', 'Dramma', 'Commedia', 'Fantascienza', 'Horror', 'Romantico', 'Documentario', 'Animazione'];
  const navigate = useNavigate('')
  const { setIsLoading } = useGlobalContext();

  const initialFormData = {
    title: '',
    director: '',
    abstract: '',
    image: null,
    genre: '',
    release_year: ''
  }

  const [formData, setFormData] = useState(initialFormData);
  const [errorMessage, setErrorMessage] = useState('')
  const initialThumb = '/img/placeholder.jpg'
  const [thumb, setThumb] = useState(initialThumb)


  const validateForm = () => {
    if (!formData.title || !formData.director || !formData.abstract || !formData.genre) return false
    if (isNaN(formData.release_year) || formData.release_year < 1892 || formData.release_year > 2025) return false

    return true
  }

  const handleSetValue = (e) => {
    const { value, name } = e.target;
    // console.log('form data:', formData);

    if (name === 'image') {
      console.log(`path provvisorio img`, URL.createObjectURL(e.target.files[0]));
      setThumb(URL.createObjectURL(e.target.files[0]))

      setFormData(prev => ({ ...prev, image: e.target.files[0] }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);

    if (!validateForm()) {
      setErrorMessage('Attenzione, tutti i campi sono obbligatori!')
      return
    }

    //info da inviare
    const dataToSend = new FormData();
    for (let key in formData) {
      dataToSend.append(key, formData[key])
    }
    console.log(dataToSend);

    axios
      .post(api_url, dataToSend, { headers: { 'Content-Type': 'multipart/form-data' } })
      .then(() => navigate('/'))
      .catch((err) => console.log(err))
  }

  return (
    <div className="container">
      <div className="card my-3">
        <header className="card-header">
          <h3>Aggiungi un nuovo film</h3>
        </header>

        <section className="card-body">
          <p className="text-danger">{errorMessage}</p>
          <form action="#" onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label className="mb-2"><strong>Titolo</strong></label>
              <input
                type="text"
                className="form-control"
                name='title'
                placeholder="inserisci il titolo"
                value={formData.title}
                onChange={handleSetValue}
              />
            </div>
            <div className="form-group mb-3">
              <label className="mb-2"><strong>Regista</strong></label>
              <input
                type="text"
                className="form-control"
                name='director'
                placeholder="inserisci il nome del regista"
                value={formData.director}
                onChange={handleSetValue}
              />
            </div>
            <div className="form-group mb-3">
              <label className="mb-2"><strong>Descrizione</strong></label>
              <textarea
                type="text"
                className="form-control"
                name='abstract'
                placeholder="inserisci la descrizione"
                value={formData.abstract}
                onChange={handleSetValue}
              />
            </div>
            <div className="form-group mb-3">
              <label className="mb-2"><strong>Genere</strong></label>
              <select
                className="form-control"
                name="genre"
                value={formData.genre || ''}
                onChange={handleSetValue}
              >
                <option value="">Seleziona un genere dalla lista</option>
                {genres.map((genre, index) => (
                  <option key={index} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group mb-3">
              <label className="mb-2"><strong>Anno di rilascio del film</strong></label>
              <input
                type="number"
                className="form-control"
                name='release_year'
                placeholder="inserisci l'anno di rilascio del film (dal 1892 al 2025)"
                min="1892"
                max="2025"
                value={formData.release_year || ''}
                onChange={handleSetValue}
              />
            </div>
            <div className="form-group mb-3">
              <label className="mb-2"><strong>Immagine</strong></label>
              <input
                type="file"
                className="form-control"
                name='image'
                onChange={handleSetValue}
              />
              <img className="thumb w-25" src={thumb} />
            </div>

            <div className="d-flex justify-content-end mt-3">
              <button className="btn btn-danger px-5" type="submit">Invia</button>
            </div>
          </form>
        </section>
      </div>

    </div >
  )
}

export default CreateFilm
