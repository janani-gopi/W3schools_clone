import React from 'react'
import { otherlang } from '../otherlang'
import "./OtherLang.css"

//ffc0c7
//fff4a3
//f3ecea
//d9eee1
//96d4d4
//e7e9eb

function OtherLang() {
  return (
    <div className='otherlangContainerLarge'>
      <div className='otherlangContainer'>
         {
            otherlang.map(({key,name,description})=>{
                return(
                    <div key={key} className='otherLang marginBtm'>
                       <h1 className='marginBtm'>{name}</h1>
                       <h4 className='marginBtm'>{description}</h4>
                       <a className='marginBtm'>Learn {name}</a>
                    </div>
                )
            })
         }
         
      </div>
      <div className='flexContainerparent'>
        <div className='flexContainer'>
               <a id='span2'style={{backgroundColor:"#e7e9eb"}}><h1>C</h1></a>
               <a id='span2'style={{backgroundColor:"#fff4a3"}}><h1>C#</h1></a>
               <a style={{backgroundColor:"#96d4d4"}}><h1>R</h1></a>
               <a style={{backgroundColor:"#ffc0c7"}}><h1>Kotlin</h1></a>
               <a><h1>Node.js</h1></a>
               <a style={{backgroundColor:"#96d4d4"}}><h1>React</h1></a>
               <a style={{backgroundColor:"#fff4a3"}}><h1>JSON</h1></a>
               <a style={{backgroundColor:"#96d4d4"}}><h1>Vue</h1></a>
               <a style={{backgroundColor:"#ffc0c7"}}><h1>MySQL</h1></a>
               <a><h1>XML</h1></a>
               <a style={{backgroundColor:"#e7e9eb"}}><h1>SASS</h1></a>
               <a style={{backgroundColor:"#fff4a3"}}><h1>Icons</h1></a>
               <a style={{backgroundColor:"#96d4d4"}}><h1>RWD</h1></a>
               <a style={{backgroundColor:"#ffc0c7"}}><h1>Graphics</h1></a>
               <a><h1>Svg</h1></a>
               <a style={{backgroundColor:"#e7e9eb"}}><h1>Canvas</h1></a>
               <a style={{backgroundColor:"#fff4a3"}}><h1>RasberryPi</h1></a>
               <a  style={{backgroundColor:"#96d4d4"}}><h1>Cyber
                      security</h1></a>
               <a style={{backgroundColor:"#96d4d4"}}><h1>Mongo DB</h1></a>
               <a><h1>Typescript</h1></a>
               <a style={{backgroundColor:"#e7e9eb"}}><h1>Django</h1></a>
               <a style={{backgroundColor:"#fff4a3"}}><h1>Go</h1></a>
               <a id='span2' style={{backgroundColor:"#ffc0c7"}}><h1>Excel</h1></a>
               <a id='span2'  style={{backgroundColor:"#e7e9eb"}}><h1>Google sheets</h1></a>
               <a id='span2'  style={{backgroundColor:"#96d4d4"}}><h1>Machine Learning</h1></a>
               <a id='span2'><h1>Aritificial Intelligence</h1></a>
         </div>
       </div>  
    </div>
    
  )
}

export default OtherLang