import React from 'react'
import './Home.css'

const LANG = ["HTML", "CSS","JAVASCRIPT", 'PYTHON','SQL', 'JAVA', 'PHP', 'BOOTSTRAP','C','C++','C#','REACT']


function Home() {


  return (
       <div>
        <div className='Hero'>
          <div className='heroTop'>
             {
              LANG.map((eachLang)=>{
                return <h3>{eachLang}</h3>
              })
             }
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