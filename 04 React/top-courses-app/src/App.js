import React, { useEffect, useState } from "react";
import { apiUrl, filterData} from './data';
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";


const App = () => {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    try{
      const res = await fetch(apiUrl);
      const output = await res.json();
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



  return (
    <div className="flex flex-col min-h-screen">

      <div>
        <Navbar />
      </div>

      <div className="bg-bgDark2">
        <div>
          <Filter filterData = {filterData} />
        </div>

        <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center flex-wrap min-h-[50vh]">
          {
            loading ? (<Spinner />) : (<Cards courses={courses} />)
          }
        </div>
      </div>

    </div>
  );

}

export default App;
