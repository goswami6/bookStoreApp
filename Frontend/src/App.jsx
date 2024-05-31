import React from 'react'
import Home from './home/Home'
import Courses from './Courses/Courses'
import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'

const App = () => {
  return (
    <>
     {/* <Home/>
     <Course/> */}
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/course" element={<Courses/>} />
      <Route path="/signup" element={<Signup/>} />

     </Routes>
    </>
  )
}

export default App
