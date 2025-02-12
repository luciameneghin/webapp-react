import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Load from "../components/Load";
import { useGlobalContext } from "../context/GlobalContext";

const DefaultLayout = () => {

  const { isLoading } = useGlobalContext()
  return (
    <div>
      <header className=""><Header /></header>
      <main><Outlet /></main>
      {isLoading && <Load />}
    </div>
  )
}

export default DefaultLayout
