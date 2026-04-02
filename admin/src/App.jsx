import React from 'react'
import Hero from './pages/Hero'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Hero/>}/>
    </Routes>
  )
}

export default App