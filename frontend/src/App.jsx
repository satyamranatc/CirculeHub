import React,{useState} from 'react'

import NavBar from "./components/NavBar.jsx"
import Explore from "./pages/Explore.jsx"
import Profile from "./pages/Profile.jsx"
import Auth from "./pages/Auth.jsx"

import {BrowserRouter, Routes, Route} from 'react-router-dom'

export default function App() {
   let [isLoggedIn, setIsLoggedIn] = useState(true)
  return (
    <div>
      <BrowserRouter>
        <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/profile" element={<Profile isLoggedIn={isLoggedIn} />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}
