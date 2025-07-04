import React, { useState } from 'react'

function Like() {
    const[increment,setIncrement]=useState(0);
    // const[decrement,setDecrement]=useState(0);
  function handler1(){
    setIncrement(increment+1);
  }
function handler2(){
    if(increment>0){
        
    setIncrement(increment-1);
    }
}
  return (
    <main>
        <h1>Likes👍:{increment}</h1>
        <button onClick={handler1}>Like</button>
        <button onClick={handler2}>DisLike</button>

    </main>
  )
}

export default Like