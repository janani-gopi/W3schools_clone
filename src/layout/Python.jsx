//f3ecea
import React from 'react'
import LangIntro from '../components/LangIntro'
import CodeSample from '../components/CodeSample'

function Python() {
  return (
    <div style={{display:"flex",flexWrap:"wrap", justifyContent:"space-around" , backgroundColor:"#f3ecea"}}>
      <LangIntro lang="Python" desc="easy programming"/>
      <CodeSample lang="Python"
          code='
          if 5 > 2:
          
          print("Five is greater than two!'/>
    </div>
  )
}

export default Python