import React from 'react'
import { useState } from 'react';
function Listitems({itemvalue,setitemvalue}) { 
    const[val,setval] = useState(false);
  return (
    <div>
        {itemvalue.map((e,index)=>{return  <div class="flex flex-row justify-center list-none">
    <li key={index} contentEditable={val.toString()}>{e}<button onClick={()=>{setval(true)}}>&#128393;</button>  
    <button onClick={(index)=>{
        const newTasks = [...itemvalue];
        newTasks.splice(index,1);
        setitemvalue(newTasks);
    }}>&#10060; </button></li>
    </div>})}
    </div> 
  )
}

export default Listitems