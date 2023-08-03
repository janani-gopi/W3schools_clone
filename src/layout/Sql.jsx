//96d4d4
import React from 'react'
import LangIntro from '../components/LangIntro'
import CodeSample from '../components/CodeSample'

function Sql() {
  return (
    <div style={{display:"flex",flexWrap:"wrap", justifyContent:"space-around" , backgroundColor:"#96d4d4"}}>
      <LangIntro lang="SQL" desc="accessing Database"/>
      <CodeSample lang="SQL"
        code="
        SELECT * FROM Customers
        
        WHERE Country='Mexico';"/>
    </div>
  )
}

export default Sql