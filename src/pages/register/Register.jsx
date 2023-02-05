import axios from 'axios';
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import './Register.css'

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordConfirmation = useRef();

    const navigate = useNavigate();
    // const { user, isFetching, error, dispatch } = useContext(AuthContext);
    // console.log(email);
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(email.current.value)
        // console.log(password.current.value)
        
        // password and passwordConfirm are checked
        if(password.current.value !== passwordConfirmation.current.value){
            passwordConfirmation.current.setCustomValidity("password is wrong")
        }else{
            try{
                const user = {
                    username: username.current.value,
                    email:email.current.value,
                    password:password.current.value,
                };
                await axios.post("/auth/register", user)
                navigate("/login");
            }catch(err){
                console.log(err);
            }
        }
    }
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className='loginLogo'>SNS App</h3>
                    <span className='loginDesc'>Making SNS app</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={(e)=>handleSubmit(e)}>
                        <p className="loginMsg">Login here</p>
                        <input className='loginInput' type="text" placeholder='User Name' ref={username} required/>
                        <input className='loginInput' type="text" placeholder='email' ref={email} required/>
                        <input className='loginInput' type="password" placeholder='Password' ref={password} required/>
                        <input className='loginInput' type="password" placeholder='Confirm password' ref={passwordConfirmation} required/>
                        <button className='loginButton'>Sign up</button>
                        <button className='loginRegisterButton'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
