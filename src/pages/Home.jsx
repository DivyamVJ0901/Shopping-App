import { useEffect, useState } from "react";
import Spinner from "../components/Spinner"
import Product from "../components/Product"
import {json}  from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading , setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  async function fetchDataPosts(){
    setLoading(true);
    try{
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    }
    catch(error)
    {
      console.log("Ooops");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(()=> {
    fetchDataPosts();
  } , {}); 

  return(
    <div>
      {
        loading ? <Spinner/> : 
        (
          posts.length > 0 ?
          (<div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-7 min-h-[80vh] mb-8  ">
            {
              posts.map((item) => (
                <Product key = {item.id} post={item}/>  
              ))
            }
          </div>)
          :
          (
            <div className="flex justify-center items-center">
                No data found
            </div>
          )
        )
      }
      <div className="bg-slate-900 w-[100%] ">
      <Footer/>
    </div>
    </div> 
  
 ) 
  
};

export default Home;
 