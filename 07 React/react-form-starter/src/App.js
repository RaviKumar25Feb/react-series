import "./App.css";
import { useState } from "react";

function App() {

  const [formData, setFormData] = useState(
    {firstName: "", lastName: "", email: "", comments: "", isVisible: false, mode: "", favCar: ""}
  );

  // function changeHandler(event) {
  //   setFormData((prevFormDate) => {
  //     return {
  //       ...prevFormDate,
  //       [event.target.name] : event.target.value
  //     }
  //   })
  // }

  function changeHandler(event) {
    //destructuring the values form the event object
    const {name, value, checked, type} = event.target
    setFormData(
      (prevFormData) => {
        return {
          ...prevFormData,
          [name] : type === "checkbox" ? checked : value
        }
      }
    )
  }
  
  // console.log(formData);

  function submitHandler(event) {
    event.preventDefault();
    //print
    console.log("Finally printing the entire form ka data....")
    console.log(formData)
  }


  return (
    <div className="flex justify-center">

      <form onSubmit={submitHandler}>

        <input
          type="text" 
          placeholder="first name"
          onChange={changeHandler}
          name = "firstName"
          value={formData.firstName}
        />

        <br/>
        <br/>

        <input
          type="text" 
          placeholder="last name"
          onChange={changeHandler}
          name = "lastName"
          value={formData.lastName}
        />

        <br/>
        <br/>

        <input
          type="email" 
          placeholder="xyz@gmail.com"
          onChange={changeHandler}
          name = "email"
          value={formData.email}
        />

        <br/>
        <br/>

        <textarea 
          placeholder="enter your comment here"
          onChange={changeHandler}
          name = "comments"
          value={formData.comments}
        />

        <br/>
        <br/>

        <input 
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          checked={formData.isVisible}
        />
        <label htmlFor="isVisible">Am I visible</label>

        <br/>
        <br/>

        <fieldset className="outline w-full">
          <legend>Mode:</legend>
          <input 
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="Online-Mode"
            id="Online-Mode"
            checked={formData.mode === "Online-Mode"}
          />
          <label htmlFor="Online-Mode">Online Mode</label>

          <br />

          <input 
            type="radio"
            onChange={changeHandler}
            name="mode"
            value="Offline-Mode"
            id="Offline-Mode"
            checked={formData.mode === "Offline-Mode"}
          />
          <label htmlFor="Offline-Mode">Offline Mode</label>
        </fieldset>

        <br/>
        <br/>

        <label htmlFor="favCar">Tell me your fav Car</label>
        <select
          name="favCar"
          value={formData.favCar}
          onChange={changeHandler}
        >
          <option value="Scarpio">Scorpio</option>
          <option value="Fartuner">Fartuner</option>
          <option value="Tharr">Tharr</option>
          <option value="Legender">Legender</option>
          <option value="Defender">Defender</option>
        </select>

        <br/>
        <br/>

        {/* <button>Submit</button> */}
        <input type="submit" value="Submit" />

      </form>

    </div>
  );
}

export default App;
