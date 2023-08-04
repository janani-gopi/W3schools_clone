
import Home from './layout/Home'
import './App.css'
import Html from './layout/Html'
import Css from './layout/Css'
import Javascript from './layout/Javascript'
import Python from './layout/Python'
import Sql from './layout/Sql'
import OtherLang from './layout/OtherLang'
import Tutorials from './pages/Tutorials'
import {useState } from 'react'
import Navbar from './components/Navbar'
import Exercises from './pages/Exercises'
import Getcertified from './pages/Getcertified'
import Services from './pages/Services'



function App() {
  const [show,setShow] = useState(false)
  const [page, setPage] = useState('')
 
  return (
    <div>
      <Navbar toggleState={setShow} pageState={setPage}/>
      { show ? 
             page == "Tutorials" && <Tutorials/> || page == "Excercises" && <Exercises/> ||  page == "Get certified" && <Getcertified/> || page == "Services" && <Services/>
            :
     <>
       <Home/>
       <Html/>
       <Css/>
       <Javascript/>
       <Python/>
        <Sql/>
       <OtherLang/>
     </>}
   </div>
  )
}

export default App
