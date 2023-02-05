import React from 'react'
import { useContext } from 'react';
import { useRef } from 'react'
import { loginCall } from '../../actionCalls';
import { AuthContext } from '../../state/AuthContext';
import './Login.css'

export default function Login() {
    const email = useRef();
    const password = useRef();
    const { user, isFetching, error, dispatch } = useContext(AuthContext);
    // console.log(email);
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(email.current.value)
        // console.log(password.current.value)
        loginCall({
            email: email.current.value,
            password: password.current.value,
        },
        dispatch
        );
    }
    
    console.log(user);
    // console.log("HELLO");

    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className='loginLogo'>SNS App</h3>
                    <span className='loginDesc'>Making SNS app</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={(e) => handleSubmit(e)}>
                        <p className="loginMsg">Login here</p>
                        <input className='loginInput' type="email" placeholder='email' ref={email} required />
                        <input className='loginInput' type="password" placeholder='Password' ref={password} required minLength="4" />
                        <button className='loginButton'>Login</button>
                        <span className='loginForget'>Forgot passwprd</span>
                        <button className='loginRegisterButton'>Create account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
