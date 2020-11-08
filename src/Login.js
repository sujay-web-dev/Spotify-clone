import React from 'react'
import "./Login.css"
import { loginUrl } from './spotify'

function Login() {
    return (
        <div className="login">
            <img src="wlogo.png" alt=""/>
            <a href={loginUrl}>LOGIN WITH SUJAYIFY</a>
        </div>
    )
}

export default Login
