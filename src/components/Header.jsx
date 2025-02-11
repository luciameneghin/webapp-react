import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="p-3 py-5 text-white d-flex justify-content-between align-items-center container">
      <div className="">
        <Link to="/" className="text-decoration-none d-flex">
          <img src="/img/tomato.png" alt="tomato" className="tomato" />
          <h2 className="text-white fw-bold logo pt-2">Boolean Tomatoes</h2></Link>
      </div>
      <Link className="btn" to="/film/create"><i className="bi bi-film"></i>Aggiungi Film</Link>
    </div>
  )
}

export default Header
