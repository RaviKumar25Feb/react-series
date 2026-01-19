import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Support from './components/Support';
import About from './components/About';
import Labs from './components/Labs';
import NotFound from './components/NotFound';
import {Link, NavLink} from 'react-router-dom';
import MainHeader from './components/MainHeader'

function App() {
  return (
    <div>

    {/* <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/support">Support</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/labs">Labs</Link>
        </li>
      </ul>
    </nav> */}


    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/support">Support</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/labs">Labs</NavLink>
        </li>
      </ul>
    </nav>
    

    {/* <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/support" element={<Support/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/labs" element={<Labs/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes> */}


    <Routes>
      <Route path="/" element={<MainHeader/>}>
      {/* This becomes your default route */}
        <Route index element = {<Home/>} />
        <Route path="/support" element={<Support/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/labs" element={<Labs/>} />
        <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes>


    </div>
  );
}

export default App;