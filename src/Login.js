import React from 'react'
import { loginUrl } from './spotify'
import "./Login.css"

function Login() {
    return (
        <div className="login">
            <img src="https://janejacksoncoach.com/wp-content/uploads/2018/03/Spotify-logo.jpg" 
            alt="Spotify"/>

            <a href={loginUrl} >Login with Spotify</a>   
        </div>
    )
}

export default Login
