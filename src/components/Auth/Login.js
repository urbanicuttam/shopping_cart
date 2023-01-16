
import React from 'react';
import { signInWithGoogle } from '../../firebase';
import GoogleButton from 'react-google-button'
import BackgroundAnimate from './BackgroundAnimate'
const Login = () => {
      
    return (
        <div>
            <center>
                <h1>Hello! </h1>
                <p>Please Login to start shopping!</p>
                <GoogleButton style={{"marginTop" : "200px"}} 
                onClick={signInWithGoogle} />
            </center>
            <BackgroundAnimate />
        </div>
    );
}
  
export default Login;