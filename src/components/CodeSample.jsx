import React from 'react'
import './CodeSample.css'

function CodeSample({lang,code}) {
  return (
    <div className='codeContainer'>
       <p>{lang} Example</p>
       <div className='code'>
           <pre>
              <code>
                {code}
           </code>
           </pre>
          
       </div>
       <a className='green'>Try it yorself</a>
    </div>
  )
}

export default CodeSample