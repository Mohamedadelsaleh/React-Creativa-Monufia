import React, { useEffect, useRef } from "react";

function InputRef () {

    const inputRef = useRef(null);

    useEffect(() => {
        console.log(inputRef);
        inputRef.current.focus();
    }, [])

    return(
        <div>
            <div>
                <label>Email</label>
                <input type="text" ref={inputRef} />
            </div>
            <div>
                <label>Password</label>
                <input type="text" />
            </div>
        </div>
    )
}

export default InputRef;