
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [ name, setName ] = useState('');

  // //variation1   //it executes on every render
  // useEffect(() => {
  //   console.log("UI Rendering Done");
  // })


  // //variation2  => On First render
  // useEffect(() => {
  //   console.log("UI Rendering Done");
  // },[]);  // second parameters repersents list of dependencies


  // //variation3 =>whenever dependency changes here in my case dependency is on text change
  // useEffect(() => {
  //   console.log("Change observed");
  // }, [text]);


  // //It won't be execute if dependency won't change. Ex-here
  // //variation3 =>whenever dependency changes here in my case dependency is on text change
  // useEffect(() => {
  //   console.log("Change observed");
  // }, [name]);


  //variation4 => to handle unmounting of a component
  useEffect(() => {
    //add event listner
    console.log("Listener added");

    //removed add event listener
    return () => {
      console.log("Listener removed");
    }

  },[text]);


  function changeHandler(event) {
    console.log(text)
    setText(event.target.value)
  }

  return (
    <div className="App">
      <input type='text' onChange={changeHandler}></input>
    </div>
  );
}

export default App;
