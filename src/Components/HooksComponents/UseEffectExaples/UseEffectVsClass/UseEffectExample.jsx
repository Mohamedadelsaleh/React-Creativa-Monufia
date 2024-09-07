import React, { useState, useEffect } from 'react'

function UseEffectExample() {
 
    const [counter, setCounter] = useState(0);


    useEffect(() => {
        document.title = `You Clicked button ${counter} times`
        console.log("calling Use Effect");
    })

  return (
    <div>
        <button onClick={() => setCounter(counter + 1)}> Click me Hooks --- {counter} times</button>
    </div>
  )
}

export default UseEffectExample