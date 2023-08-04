import React from 'react'
import "./LangIntro.css"
import LandIntroBtn from './LandIntroBtn'

function LangIntro({lang , desc}) {
  return (
    <div className='container'>
        <h1 className='marginBtm'>{lang}</h1>
        <h4 className='marginBtm'>The language for {desc}</h4>
        <LandIntroBtn btnColor="green" lang={lang} desc="Learn" />
        <LandIntroBtn btnColor="yellow" desc="Video tutorial" />
        <LandIntroBtn btnColor="black" lang={lang} desc="Learn" />
        <LandIntroBtn btnColor="pink" desc="Get certified" />
    </div>
  )
}

export default LangIntro