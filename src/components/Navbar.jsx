import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({state1,state2}) {

  function onhandleClick(e){
   // console.log("clicked")
     state1(prev => !prev)
     state2(e.target.innerText)
    // console.log(e.target.innerText)
  }  
  return (
    <div className='navBar'>
    <div>
        <img src='https://upload.wikimedia.org/wikipedia/commons/a/a0/W3Schools_logo.svg' className='logo'/>
        <p className='page' onClick={(e)=>onhandleClick(e)}>Tutorials</p>
        <p className='page' onClick={(e)=>onhandleClick(e)}>Excercises</p>
        <p className='page' onClick={(e)=>onhandleClick(e)}>Get certified</p>
        <p className='page' onClick={(e)=>onhandleClick(e)}>Services</p>
    </div>
    <div className='login_signup'>
       <a className='signup'>SignUp</a>
       <Link to="/login" className="login">Login</Link>
    </div>   
  </div> 
  )
}


export default Navbar