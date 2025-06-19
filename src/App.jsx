import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import CountryList from "./components/CountryList"
import CountryDetail from "./components/CountryDetail"

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"   element={<CountryList />}> </Route>
          <Route path="/country/:name"  element={<CountryDetail/>}> </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
