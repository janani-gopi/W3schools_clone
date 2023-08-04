import React from 'react'

function LandIntroBtn({btnColor,lang,desc}) {
  return (
    <a href='/' className={btnColor} style={{marginBottom:"2rem"}}>{desc} {lang}</a>
  )
}

export default LandIntroBtn