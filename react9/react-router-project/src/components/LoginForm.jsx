import React from 'react'
import { useState } from 'react';
import toast from 'react-hot-toast';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export const LoginForm = ({setIsLoggedIn}) => {
    const [formData, setFormData] = useState({
        email: "", password: ""
    })

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name] : event.target.value
            }
        ))
    }

    const navigate = useNavigate();

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
    }

  return (
    <form onSubmit={submitHandler}>
        {/* email address field */}
        <label>
            <p>
                Email address <sup>*</sup>
            </p>
            <input 
                required
                name='email'
                type="email"
                value={formData.email}
                onChange={changeHandler}
                placeholder="Enter email id"
            />
        </label>

        {/* password field */}
        <label>
            <p>
                Password <sup>*</sup>
            </p>
            <input 
                required
                name='password'
                type= {showPassword ? ("text") :  ("password")}
                value={formData.password}
                onChange={changeHandler}
                placeholder="Enter password"
            />

            <span onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
            </span>

            <Link to="#">
                <p>
                    Forgot Password
                </p>
            </Link>
        </label>

        {/* sign in button */}
        <button>
            Sign In
        </button>

    </form>
  )
}

export default LoginForm;
