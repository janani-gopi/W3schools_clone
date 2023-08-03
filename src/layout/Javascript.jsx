//282a35
import React from 'react'
import LangIntro from '../components/LangIntro'
import CodeSample from '../components/CodeSample'

function Javascript() {
  return (
    <div style={{display:"flex",flexWrap:"wrap", justifyContent:"space-around" , backgroundColor:"#282a35"}}>
      <LangIntro lang="Javascript" desc="programming web pages"/>
      <CodeSample 
      lang="Javascript"
      code ="
         
      "
          />
    </div>
  )
}

export default Javascript