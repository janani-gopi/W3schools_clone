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
      code ={"  <button onclick='myFunction()''>Click Me!</button>\n\n  <script>\n\n  function myFunction() {\n\n  let x = document.getElementById('demo');\n\n  x.style.fontSize = '25px';\n\n  x.style.color = 'red'}\n\n  </script>"}  />
    </div>
  )
}

export default Javascript