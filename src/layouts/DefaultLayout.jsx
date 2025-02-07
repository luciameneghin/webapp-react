import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div>
      <header className=""></header>
      <main><Outlet /></main>
    </div>
  )
}

export default DefaultLayout
