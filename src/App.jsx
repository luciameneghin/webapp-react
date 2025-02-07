import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GlobalProvider } from "../context/GlobalContext"

import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import FilmDetailPage from "./pages/FilmDetailsPage"
import NotFoundPage from "./pages/404Page"

const App = () => {
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path='/' Component={HomePage} />
              <Route path='/film' Component={FilmDetailPage} />
              <Route path='*' Component={NotFoundPage} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App

