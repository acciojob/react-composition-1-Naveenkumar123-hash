
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
  const [update,setUpdate]=useState('Tab 1')
  return (
    <div>
        <ul>
          <li onClick={()=>{
           setUpdate('Tab 1')
          }}>Tab 1</li>
          <li onClick={()=>{
           setUpdate('Tab 2')
          }}>Tab 2</li>
          <li onClick={()=>{
           setUpdate('Tab 3')
          }}>Tab 3</li>
          <p>This is the content for {update}.</p>
        </ul>
    </div>
  )
}

export default App
