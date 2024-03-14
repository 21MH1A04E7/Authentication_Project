import React from 'react'
import { BrowserRouter,Routes,Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import Layout from './Layout'
import SignIn from './pages/SignIn'


function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>} >
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/sign-in' element={<SignIn/>} />
        <Route path='/profile' element={<Profile/>} />
      </Route>
    )
  )
  return (
   <RouterProvider router={router}/>
  )
}

export default App