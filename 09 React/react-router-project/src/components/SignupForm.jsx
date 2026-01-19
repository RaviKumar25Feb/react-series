import React, { useEffect } from 'react'
import { useState } from 'react';
import toast from 'react-hot-toast';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';


const SignupForm = ({setIsLoggedIn}) => {
    
    const [formData, setFormData] = useState({
        firstName: "", 
        lastName: "", 
        email: "", 
        password: "",
        confirmPassword: ""
    })

    const [showPasswordFirst, setShowPasswordFirst] = useState(false);
    const [showPasswordSecond, setShowPasswordSecond] = useState(false);

    function changeHandler(event) {
        setFormData( (prevData) => (
            {
                ...prevData,
                [event.target.name] : event.target.value
            }
        ))
    }

    const navigate = useNavigate();

    function submitHandler(event) {
        event.preventDefault();
        if(formData.password != formData.confirmPassword)
        {
            toast.error("Password do not match!");
            navigate("/");
        }
        else{
            setIsLoggedIn(true);
            toast.success("Account Created")
            navigate("/dashboard");
        }
    }

  return (
    <div>
        {/* student - instructor tab */}
        <div>
            <button>
                Student
            </button>
            <button>
                Instructor
            </button>
        </div>

        {/* signup form here */}
        <form onSubmit={submitHandler}>
            {/* first name and last name container */}
            <div>
                <label>
                    <p>First Name<sup>*</sup></p>
                    <input 
                        required
                        type='text'
                        name='firstName'
                        onChange={changeHandler}
                        placeholder="Enter first name"
                        value={formData.firstName}
                    />
                </label>


                <label>
                    <p>Last Name<sup>*</sup></p>
                    <input 
                        required
                        type='text'
                        name='lastName'
                        onChange={changeHandler}
                        placeholder="Enter last name"
                        value={formData.lastName}
                    />
                </label>
            </div>

            {/* email address  */}
            <label>
                <p>Email address<sup>*</sup></p>
                <input 
                    required
                    type='email'
                    name='email'
                    onChange={changeHandler}
                    placeholder="Enter email address"
                    value={formData.email}
                />
            </label>

            {/* create password and confirm password */}
            <div>
                <label>
                    <p>Create password<sup>*</sup></p>
                    <input 
                        required
                        type={showPasswordFirst ? "text" : "password"}
                        name='password'
                        onChange={changeHandler}
                        placeholder="Enter password"
                        value={formData.password}
                    />

                    <span onClick={() => setShowPasswordFirst((prev) => !prev)}>
                        {showPasswordFirst ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                    </span>
                </label>

                <label>
                    <p>Confirm password<sup>*</sup></p>
                    <input 
                        required
                        type={showPasswordSecond ? "text" : "password"}
                        name='confirmPassword'
                        onChange={changeHandler}
                        placeholder="Confirm password"
                        value={formData.confirmPassword}
                    />

                    <span onClick={() => setShowPasswordSecond((prev) => !prev)}>
                        {showPasswordSecond ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                    </span>
                </label>
            </div>

            {/* create account button */}
            <button>Create Account</button>
        </form>
    </div>
  )
}

export default SignupForm;