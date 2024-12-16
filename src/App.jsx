import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalContext from './contexts/GlobalContext'
import { useState } from "react"
import AppLayout from "./layouts/AppLayout"
import MoviesPage from "./pages/MoviesPage"
import SingleMovie from "./pages/SingleMovie"

import './App.css'

function App() {

  const [loading, setLoading] = useState(false);

  //values for the context
  const values = {
    loading,
    setLoading
  }

  return (
    <>
      <GlobalContext.Provider value={values}>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<MoviesPage />} />
              <Route path="movies/:id" element={<SingleMovie />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}

export default App
