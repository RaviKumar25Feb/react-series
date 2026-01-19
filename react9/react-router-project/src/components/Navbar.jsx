import React from 'react';
import Logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setLoggedIn = props.setLoggedIn;

  return (
    <div className='flex justify-between mt-5 items-center w-11/12 max-w-[1160px] py-4 mx-auto'>

      <Link to="/">
        <img src={Logo} alt='Logo' width={160} height={32} />
      </Link>


      <nav>
        <ul className='flex items-center gap-x-4'>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/">About</Link>
          </li>

          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>


      {/* Login button -> Signup button -> Logout button -> Dashboard button */}

      <div className='flex items-center gap-x-4'>
        {/* when user login nahi hoga tab ye button show hoga */}
        { !isLoggedIn &&
          <Link to="/login">
            <button>
              Login
            </button>
          </Link>
        }

        {/* when user login nahi hoga tab ye button show hoga */}
        { !isLoggedIn &&
          <Link to="/signup">
            <button>
              Sign Up
            </button>
          </Link>
        }

        {/* when user login hoga tab ye button show hoga */}
        { isLoggedIn &&
          <Link to="/">
            <button
               onClick={() => {
              setLoggedIn(false);
              toast.success("Logged Out");
            }}>
              Log Out
            </button>
          </Link>
        }

        {/* when user login hoga tab ye button show hoga */}
        { isLoggedIn &&
          <Link to="/dashboard">
            <button>
              Dashboard
            </button>
          </Link>
        }
      </div>

    </div>
  )
}

export default Navbar;
