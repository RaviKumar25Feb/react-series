import React, {useState, useEffect} from 'react'
import { apiUrl, filterData} from "../data";
import Navbar from "./Navbar";
import Filter from "./Filter";
import Cards from "./Cards";
import Spinner from "./Spinner";

const Container = () => {
    const [courses, setCourses] = useState(null);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState(filterData[0].title)
  
    async function fetchData() {
      setLoading(true);
      try{
        const response = await fetch(apiUrl);
        const output = await response.json();
        //save data into courses variable
        setCourses(output.data);
      }
      catch(error) {
        console.log("Can't fetch data");
      }
      setLoading(false);
    }
  
    useEffect(() => {
      fetchData();
    }, []);

    return (<div>

      {
        loading?<div className='spinnerSet'><Spinner/></div>:
        <div className="flex flex-col min-h-screen bg-bgDark2">
          <div>
              <Navbar/>
          </div>
      
          <div className="bg-bgDark2">
              <div>
                <Filter filterData = {filterData} category={category} setCategory={setCategory}/>
              </div>
      
              <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center flex-wrap min-h-[50vh]">
                <Cards courses={courses} category={category}/>
              </div>
          </div>
        </div>
      }

    </div>);
}

export default Container;
