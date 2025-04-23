import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './page/LoginPage'
import JobSeeker from './page/JobSeeker'
import PrivateRoute from './components/PrivateRoute'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/job' element={
          <PrivateRoute>
            <JobSeeker />
          </PrivateRoute>
        }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App