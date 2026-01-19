import React from "react";
import data from "./data";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh] bg-slate-200">
      <Testimonial data={data}/>
    </div>
  );
};

export default App;