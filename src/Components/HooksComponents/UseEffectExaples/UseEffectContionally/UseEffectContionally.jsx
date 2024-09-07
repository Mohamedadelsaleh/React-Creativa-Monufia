import React, { useEffect, useState } from 'react'

function UseEffectConditionally() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
        document.title = `Button Clicked ${count} times`
        console.log("UseEffect --- updating title");
        
    }, [count])

  return (
    <div>
        <h2> Count: {count}</h2>
        <input type="text" name="count" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={() => setCount( count + 1 )}>Increment</button>
    </div>
  )
}

export default UseEffectConditionally