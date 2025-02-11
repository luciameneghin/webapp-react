import { useState } from "react"


const CreateFilm = () => {
  const initialFormData = {
    title: '',
    director: '',
    abstract: ''
  }

  const [formData, setFormData] = useState(initialFormData)

  const handleSetValue = (e) => {
    console.log(e.target);
  }
  return (
    <div className="container">
      <div className="card my-3">
        <header className="card-header">
          <h3>Aggiungi un nuovo film</h3>
        </header>

        <section className="card-body">
          <form action="#">
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
