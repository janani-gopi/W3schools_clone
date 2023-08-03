import React from 'react'
import "./LangIntro.css"

function LangIntro({lang , desc}) {
  return (
    <div className='container'>
        <h1 className='marginBtm'>{lang}</h1>
        <h4 className='marginBtm'>The language for {desc}</h4>
        <a href='/' className='green marginBtm'>Learn {lang}</a>
        <a href='/' className='yellow marginBtm'>Video tutorial</a>
        <a href='/' className='black marginBtm'>{lang} reference</a>
        <a href='/' className='pink'>Get certified</a>
    </div>
  )
}

export default LangIntro