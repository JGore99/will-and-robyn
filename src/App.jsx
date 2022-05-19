import React from "react"
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Landing from './pages/Landing/Landing'
import Details from './pages/Details/Details'
import Registry from './pages/Registry/Registry'
import Lodging from './pages/Lodging/Lodging'
import './App.css'

function App() {


  return (
    <main>
      <NavBar />
      <Routes>
        <Route path='/' element={<Landing /> }/>
        <Route path='/details' element={<Details /> }/>
        <Route path='/registry' element={<Registry /> }/>
        <Route path='/lodging' element={<Lodging /> }/>
      </Routes>
    </main>
  );
}

export default App;
