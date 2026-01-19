import { IoCartSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      
      <div className="flex justify-between">

        <NavLink to="/">
          <img height={10} width={60} alt="logo-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQenG9Ruktupyd1PEK2GvhCxKK5RoBAQt3JiA&s" />
        </NavLink>

        <div>
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <IoCartSharp />
          </NavLink>
        </div>
      </div>

    </div>
  )}

export default Navbar;
