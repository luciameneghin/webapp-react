import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Loader from '../components/Load'
import { useGlobalContext } from "../context/GlobalContext";

const DefaultLayout = () => {

  const { isLoading } = useGlobalContext()
  return (
    <div>
      <header className=""><Header /></header>
      <main><Outlet /></main>
      {isLoading && <Loader />}
    </div>
  )
}

export default DefaultLayout
