import React from 'react'
import './Home.css'

function Home() {
  return (
    <div>
        <div className='navBar'>
          <div>
              <img src='https://upload.wikimedia.org/wikipedia/commons/a/a0/W3Schools_logo.svg' className='logo'/>
              <p>Tutorials</p>
              <p>Excercise</p>
              <p>Get certified</p>
              <p>Services</p>
          </div>
          <div className='login_signup'>
             <a className='signup'>SignUp</a>
             <a className='login'>Login</a>
          </div>   
        </div> 
        <div className='Hero'>
             <div className='heroText'>
                 <h1 className='marginBtm'>Learn to code</h1>
                 <h2 className='marginBtm'>With the word's largest web developer site</h2>
                 <input className='searchInput marginBtm'placeholder='search our tutorials Eg.HTML'/><i className="searchIcon fa-solid fa-magnifying-glass fa-md"></i>
                 <h2 className='roadmap'><a href='/'>Not sure where to begin?</a></h2>
             </div>
        </div> 
    </div>
  )
}

export default Home