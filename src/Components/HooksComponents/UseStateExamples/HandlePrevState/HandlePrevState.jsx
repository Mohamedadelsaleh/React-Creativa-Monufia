import React, {useState} from "react";


function HandlePrevState() {

     const [counter, setCounter] = useState(0);

     const handleCounter = () => {
            setCounter(prev => prev + 1);
     }

     const handleIncrementBy5 = () => {
            setCounter( prevStat => prevStat + 5)
     }

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={handleCounter}>Hook Increment</button>
            <button onClick={handleIncrementBy5}> Increment By 5</button>
        </div>
    )
}

export default HandlePrevState;