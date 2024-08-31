import React from "react";


function EventHandleExample () {

    function handleClick () {
        alert("Click")
        console.log("Button clicked");
        
    }

    return(
        <div>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default EventHandleExample;