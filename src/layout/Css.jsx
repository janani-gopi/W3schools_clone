//fff4a3
import React from 'react'
import LangIntro from '../components/LangIntro'
import CodeSample from '../components/CodeSample'

function Css() {
  return (
    <div style={{display:"flex",flexWrap:"wrap", justifyContent:"space-around" , backgroundColor:"#fff4a3"}}>
      <LangIntro lang="CSS" desc="styling web pages"/>
      <CodeSample
       lang="CSS"
       code="
       body {
        background-color: lightblue;
      }
      
      h1 {
        color: white;
        text-align: center;
      }
      
      p {
        font-family: verdana;
      }
       "/>
    </div>
  )
}

export default Css