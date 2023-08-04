import React from 'react'
import { otherlang } from '../otherlang'
import "./OtherLang.css"
import { OTHERLANG_GRID} from '../otherlanggrid'

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
               {
                OTHERLANG_GRID.map(({key,topic,color})=>{
                 return <a key={key} style={{backgroundColor:`${color}`}}><h1>{topic}</h1></a>   
                })
               }
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