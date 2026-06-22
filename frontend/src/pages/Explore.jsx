import React,{useState,useEffect} from "react";
import axios from "axios";

export default function Explore() {
  let [postData, setPosts] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:8080/api/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },[])

  return (
    <div className="min-h-screen bg-gray-100 ">
      <div id="Header" className="py-8">
        <h1 className="text-4xl font-bold text-center">Explore</h1>
      </div>

    <div id="ContentContainer" className="flex flex-wrap px-4 justify-center items-center gap-4 mx-auto px-4 pb-10">
      {
        postData.map((post) => {
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-4 border-b">
            <h3 className="font-semibold text-lg">Rahul Jhunjuhnwala</h3>
            <p className="text-sm text-gray-500">12 Days Ago</p>
          </div>

          <img
            src={post.pic}
            alt="Bird"
            className="w-full h-96 object-cover"
          />

          <div className="p-4">
            <p className="text-gray-700">
             {post.caption}
            </p>
          </div>
        </div>
        })
      }
       
      </div>
    </div>
  );
}
