import React,{useState,useEffect} from 'react'
import axios from "axios";

export default function Profile({isLoggedIn}) {

    let [userData, setUserData] = useState({})

    useEffect(()=>{
        if(localStorage.getItem("user")){
            setUserData(JSON.parse(localStorage.getItem("user")))
        }
    },[isLoggedIn])

    if(!isLoggedIn){
        window.location.href = "/auth"
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            pic: e.target[0].value,
            caption: e.target[1].value,
            author: userData
        }
        console.log(data)
        axios.post("http://localhost:8080/api/posts", data)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }

  return (
    <div>
        <div id="header">
            <div className="text-4xl font-bold text-center py-8">
                    <img src={userData.avatar} alt="" className="w-24 h-24 rounded-full mx-auto mb-4" />
                    {userData.fullName}

            </div>

            <div id="uploadSection">
                <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-4">
                    <input type="text" className="border border-gray-300 rounded-lg px-4 py-2" placeholder="Image URL" />
                    <input type="text" className="border border-gray-300 rounded-lg px-4 py-2" placeholder="Caption" />
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
