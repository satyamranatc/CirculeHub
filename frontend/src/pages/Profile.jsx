import React from 'react'

export default function Profile({isLoggedIn}) {

    if(!isLoggedIn){
        window.location.href = "/auth"
    }

  return (
    <div>
        <div id="header">
            <h1 className="text-4xl font-bold text-center py-8">Profile</h1>

            <div id="uploadSection">
                <form className="flex flex-col items-center justify-center gap-4">
                    <input type="url" className="border border-gray-300 rounded-lg px-4 py-2" />
                    <button type="submit" className="bg-black text-white px-4 py-2 rounded-lg hover:opacity-90 transition">Upload</button>
                </form>
            </div>

            <div id = "postsSection" className="flex flex-wrap justify-center items-center gap-4 py-8">
                
                User Post

            </div>


        </div>


    </div>
  )
}
