import React, { useState } from 'react'

function HandleStringState() {

    const [message, setMessage] = useState("Guest");

    const handleMessage = () =>{
        setMessage("Rawda")
    }

  return (
    <div>
            <h2>Hello {message}!</h2>
            <button onClick={handleMessage}>Change Message</button>
    </div>
  )
}

export default HandleStringState