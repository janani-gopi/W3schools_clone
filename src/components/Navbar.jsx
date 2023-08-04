import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({toggleState,pageState}) {
const navbarTabList = [
                       {
                        key:1,
                        topic:"Tutorials"
                       },
                       {
                        key:2,
                        topic:"Excercises"
                       },
                       {
                        key:3,
                        topic:"Get certified"
                       },
                       {
                        key:4,
                        topic:"Services"
                       },

                       ]
function onhandleClick(e){
            toggleState(prev => !prev)
            pageState(e.target.innerText)
                       }                       
  return (
    <div className='navBar'>
    <div>
        <img src='https://upload.wikimedia.org/wikipedia/commons/a/a0/W3Schools_logo.svg' className='logo'/>
        {
            navbarTabList.map(({key,topic})=>{
                   return  <p className='page' key={key} onClick={(e)=>{onhandleClick(e)}}>{topic}</p>
            })
        }
    </div>
    <div className='login_signup'>
       <a className='signup'>SignUp</a>
       <Link to="/login" className="login">Login</Link>
    </div>   
  </div> 
  )
}


export default Navbar