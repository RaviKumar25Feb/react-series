import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([])

  async function fetchData() {
    setLoading(true);
    try{
      const res = await fetch(API_URL);
      const data = await res.json();
      //log the data
      console.log(data);
      setPosts(data);
    }
    catch(e){
      console.log("Issue fetching data");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>
      {
        loading ? <Spinner /> :
        posts.length > 0
        ? (
          <div>
            {
              posts.map((post) => 
                <Product key={post.id} post={post}/>
              )
            }
          </div>
        )
        : (
          <div>
            <p>No Data Found</p>
          </div>
        )
      }
    </div>
  );
};

export default Home;
