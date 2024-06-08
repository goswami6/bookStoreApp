import React from 'react'
import Home from './home/Home'
import Courses from './Courses/Courses'
import { Navigate, Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import  { Toaster } from 'react-hot-toast';
import { useAuth } from '../src/context/AuthProvider';

const App = () => {
  const [authUser, setAuthUser]=useAuth()
console.log(authUser);
  return (
    <>
     {/* <Home/>
     <Course/> */}
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/course" element={authUser?<Courses/>:<Navigate to="/signup"></Navigate>} />
      <Route path="/signup" element={<Signup/>} />

     </Routes>
     <Toaster />
    </>
  )
}

export default App
