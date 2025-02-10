import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GlobalProvider } from "../context/GlobalContext"

import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import FilmDetailsPage from "./pages/FilmDetailsPage"
import NotFoundPage from "./pages/404Page"

const App = () => {
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/film/:id" element={<FilmDetailsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App

