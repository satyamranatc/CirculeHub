import React,{useState,useEffect} from 'react'
import axios from "axios";

export default function Auth() {

  useEffect(()=>{

    // if (localStorage.getItem("user")) {
    //   window.location.href = "/profile"
    // }

  },[])

  async function handleSignUp(e) 
  {
    e.preventDefault();
    let data = {
      fullName: e.target[0].value,
      avatar: e.target[1].value,
      email: e.target[2].value,
      password: e.target[3].value
    }

    let res = await axios.post("http://localhost:8080/api/user/register", data)
    console.log(res.data)
    localStorage.setItem("user", JSON.stringify(res.data))
    
  }

  async function handleLogin(e)
  {
    e.preventDefault();
    let data = {
      email: e.target[0].value,
      password: e.target[1].value
    }
    let res = await axios.post("http://localhost:8080/api/user/login", data)
    console.log("Login",res.data)
    localStorage.setItem("user", JSON.stringify(res.data))
  }



  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8">

        {/* Login */}
        <div
          id="LoginSection"
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold mb-6">Login</h2>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label
                htmlFor="login-email"
                className="block text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="login-email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="login-password"
                className="block text-sm font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="login-password"
                name="password"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90 transition"
            >
              Login
            </button>
          </form>
        </div>

        {/* Signup */}
        <div
          id="SignUpSection"
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold mb-6">Sign Up</h2>

          <form onSubmit={handleSignUp} className="space-y-5">
            <div>
              <label
                htmlFor="signup-name"
                className="block text-sm font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="signup-name"
                name="name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="signup-avatar"
                className="block text-sm font-medium mb-2"
              >
                Avatar
              </label>
              <input
                type="text"
                id="signup-avatar"
                name="avatar"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="signup-email"
                className="block text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="signup-email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="signup-password"
                className="block text-sm font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="signup-password"
                name="password"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90 transition"
            >
              Sign Up
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}