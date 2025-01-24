import React from 'react'
import Home from './Home/Home'
import CoursePage from './Course/CoursePage'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
  <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/course' element={<CoursePage/>}></Route>
    </Routes>
  </>
  )
}

export default App
