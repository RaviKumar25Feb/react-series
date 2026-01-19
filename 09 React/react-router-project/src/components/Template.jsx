import React from 'react'
import frameImage from '../assets/frame.png';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import {FcGoogle} from 'react-icons/fc'

const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {
  return (
    <div>
    
        {/* right side part */}
        <div>

            <h1>{title}</h1>

            <p>
                <span>{desc1}</span>
                <br/>
                <span>{desc2}</span>
            </p>

            {formtype === "signup" ?
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
            (<LoginForm  setIsLoggedIn={setIsLoggedIn}/>)}

            <div>
                <div></div>
                <p>OR</p>
                <div></div>
            </div>

            <div>
                <button>
                    <FcGoogle/>
                    <p>Sign in with Google</p>
                </button>
            </div>

        </div>

        {/* left side part */}
        <div>
            <img 
                src={frameImage} 
                width={558} 
                height={504} 
                loading='lazy' />
            <img 
                src={image} 
                width={554} 
                height={500} 
                loading='lazy' />
        </div>
    
    </div>
  )
}

export default Template;
