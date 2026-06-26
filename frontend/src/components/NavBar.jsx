import React from 'react'

import { Link } from 'react-router-dom'

import { useState } from 'react'

export default function NavBar({isLoggedIn, setIsLoggedIn}) {


   

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold" >Circle Hub</h2>
        <ul className="flex space-x-4 list-none gap-1.5 items-center">
            <li><Link to="/">Explore</Link></li>
           {
            isLoggedIn ? (
                <>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><button className="btn bg-rose-500 text-white px-4 py-2 rounded-2xl" onClick={() => {
                        setIsLoggedIn(false)
                        localStorage.removeItem("user")
                    }
                    }>Logout</button></li>
                </>
            ) : (
                <li><Link to="/auth">Login</Link></li>
            )
           }
        </ul>
        
    </nav>
  )
}
