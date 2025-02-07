import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const DefaultLayout = () => {
  return (
    <div>
      <header className=""><Header /></header>
      <main><Outlet /></main>
    </div>
  )
}

export default DefaultLayout
