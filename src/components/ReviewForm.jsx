import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useGlobalContext } from "../context/GlobalContext";

const ReviewForm = ({ movie_id, fetchData }) => {
  const api_url = `${import.meta.env.VITE_API_URL}/api/movies/${movie_id}/reviews`;
  const redirect = useNavigate();
  const { setIsLoading } = useGlobalContext();

  const initialFormData = {
    text: '',
    name: '',
    vote: '',
    movie_id: 0
  }

  const [formData, setFormData] = useState(initialFormData)
  const [errorMessage, setErrorMessage] = useState('')


  const validateForm = () => {
    // console.log(typeof formData.vote);
    if (!formData.name || !formData.text) return false
    if (isNaN(formData.vote) || formData.vote < 1 || formData.vote > 5) return false

    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('invio');
    //validazione
    if (!validateForm()) {
      setErrorMessage('Attenzione, nome e testo sono obbligatori e il voto deve essere un numero compreso tra 1 e 5')
      return
    }
    //......
    //console.log(formData); //devo vedere quello che inserisco nei campi di input 
    // console.log(api_url);
    axios.post(api_url, formData, { headers: { 'Content-Type': 'application/json' } })
      .then(res => {
        // console.log(res.data);
        setFormData(initialFormData); //svuoto form
        //cancello eventuale messaggio di errore
        setErrorMessage('')
        //ricarico recensioni
        fetchData(movie_id, () => redirect('/404'))
      })
      .catch(err => {
        console.log(err);
      })
  }


  const setFieldValue = (e) => {
    const { value, name } = e.target;
    // console.log(value, name);
    setFormData((prev => ({ ...prev, [name]: value })));
  }


  return (
    <>
      <div className="card my-3">
        <header className="card-header">
          <h1>Aggiungi una recensione</h1>
        </header>
        <div className="card-body">
          <p className="text-danger">{errorMessage}</p>
          <form action="#" onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label className="mb-2"><strong>Il tuo Nome Utente</strong></label>
              <input
                type="text"
                className="form-control"
                name='name'
                placeholder="inserisci il tuo nome"
                value={formData.name}
                onChange={setFieldValue}
              />
            </div>
            <div className="form-group mb-3">
              <label className="mb-2"><strong>La tua Recensione</strong></label>
              <textarea
                name="text"
                type="text"
                className="form-control"
                placeholder="inserisci la tua recensione"
                value={formData.text}
                onChange={setFieldValue}
              >
              </textarea>
            </div>
            <div className="form-group">
              <label className="mb-2"><strong>La tua Valutazione</strong></label>
              <input
                type="number"
                className="form-control"
                name='vote'
                min={1}
                max={5}
                placeholder="inserisci un numero come valutazione"
                value={formData.vote}
                onChange={setFieldValue}
              />
            </div>

            <div className="d-flex justify-content-end mt-3">
              <button className="btn px-5" type="submit">Invia</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ReviewForm
