import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './page/LoginPage'
import JobSeeker from './page/JobSeeker'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/job' element={<JobSeeker/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App