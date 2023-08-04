 import React, { useState,useRef } from 'react'
 import './Login.css'
 
 function Login() {
 
 const [email , setEmail] = useState('')
 const [password , setPassword] = useState('')
 

  
  function onLoginClicked(){
    
  }

   return (
     <div className='loginPage'>
        <div className='loginNav'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/a/a0/W3Schools_logo.svg' className='logo'/> 
          <i className="fa-solid fa-xmark fa-2xl" ></i>
        </div>
         <div className='loginContainer'>
                 <h2>Login</h2>
                 <div className='email'>
                 <label htmlFor="email">Email</label>
                 <input type='email' id='email'/>
                 </div>
                 <div className='password'>
                 <label htmlFor="password">Password</label>
                 <input type='password' id='pasword'/>
                 </div>
                 <button className='loginBtn' onClick={onLoginClicked}>Log in</button>
                 <hr/>
                 <button className='blueBtn'><i className="fa-brands fa-facebook"></i> Continue with facebook</button>
                 <button className='whiteBtn'><i className="fa-brands fa-google"></i> Continue with Google</button>
                 <button className='whiteBtn'><i className="fa-brands fa-github"></i> Continue with Github</button>
                 <p>Forgot password?</p>
         </div>
      </div>
   )
 }
 
 export default Login