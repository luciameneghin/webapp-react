import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="bg-danger p-3 text-white d-flex justify-content-between">
      <Link to="/" className="text-decoration-none text-white"><h3>Boolean Tomatoes</h3></Link>
      <Link className="btn btn-primary" to="/film/create">Aggiungi Film</Link>
    </div>
  )
}

export default Header
