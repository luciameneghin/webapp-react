import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const CreateFilm = () => {
  const api_url = `${import.meta.env.VITE_API_URL}/api/movies/`;
  const navigate = useNavigate('')

  const initialFormData = {
    title: '',
    director: '',
    abstract: '',
    image: null
  }

  const [formData, setFormData] = useState(initialFormData)

  const handleSetValue = (e) => {
    const { value, name } = e.target;

    if (name === 'image') {
      console.log(`path provvisorio img`, URL.createObjectURL(e.target.files[0]));
      setFormData(prev => ({ ...prev, image: e.target.files[0] }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))

    }
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);

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
              <label className="mb-2"><strong>Immagine</strong></label>
              <input
                type="file"
                className="form-control"
                name='image'
                onChange={handleSetValue}
              />
            </div>

            <div className="d-flex justify-content-end mt-3">
              <button className="btn btn-danger px-5" type="submit">Invia</button>
            </div>
          </form>
        </section>
      </div>

    </div>
  )
}

export default CreateFilm
