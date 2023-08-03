import LangIntro from "../components/LangIntro";
import CodeSample from "../components/CodeSample";
import React from 'react'

function Html() {
  return (
    <div style={{display:"flex",flexWrap:"wrap", justifyContent:"space-around" , backgroundColor:"#D9EEE1"}}>
      <LangIntro lang="HTML" desc="building web pages"/>
      <CodeSample 
      lang="HTML"
      code="
          &lt;!DOCTYPE html&gt;

          &lt;html&gt;

          &lt;title&gt;HTML Tutorial&lt;/title&gt;

          &lt;body&gt;

          &lt;h1&gt;This is a heading&lt;/h1&gt;

          &lt;p&gt;This is a paragraph.&lt;/p&gt;

          &lt;/body&gt;
          
          &lt;/html&gt;" />
   </div>)     
}

export default Html