import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route element={<AppLayout />}>


          </Route>

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
