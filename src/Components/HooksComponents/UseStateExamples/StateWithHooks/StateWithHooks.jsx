import React, {useState} from "react";


function StateWithHooks() {

     const [counter, setCounter] = useState(0);

     const handleCounter = () => {
            setCounter(counter + 1);
     }

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={handleCounter}>Hook Increment</button>
        </div>
    )
}

export default StateWithHooks;