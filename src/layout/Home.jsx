import React, { useState } from 'react'
import './Home.css'


function Home() {


  return (
       <div>
        <div className='Hero'>
          <div className='heroTop'>
             <h3>HTML</h3>
             <h3>CSS</h3>
             <h3>JAVASCRIPT</h3>
             <h3>PYTHON</h3>
             <h3>SQL</h3>
             <h3>JAVA</h3>
             <h3>PHP</h3>
             <h3>BOOTSTRAP</h3>
             <h3>C</h3>
             <h3>C++</h3>
             <h3>C#</h3>
             <h3>REACT</h3>
          </div>
             <div className='heroText'>
                 <h1 className='marginBtm'>Learn to code</h1>
                 <h2 className='marginBtm description'>With the word's largest web developer site</h2>
                 <input className='searchInput marginBtm'placeholder='search our tutorials Eg.HTML'/><i className="searchIcon fa-solid fa-magnifying-glass fa-md"></i>
                 <h2 className='roadmap'><a href='/'>Not sure where to begin?</a></h2>
             </div>
        </div> 
    </div>  
  )
}

export default Home