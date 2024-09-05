import React, { useState } from 'react'

function StateAsObject() {

   const [name, setName] = useState({ fname: "" , lname: "" })

  return (
    <div>
        <input type="text" value={name.fname} onChange={ e => setName({...name, fname: e.target.value})}/>
        <input type="text" value={name.lname} onChange={ e => setName({...name, lname: e.target.value})}/>
        <h2> Your First Name is: {name.fname}</h2>
        <h2> Your Last Name is: {name.lname}</h2>
        <h3>*********************************************</h3>
        <h3>{JSON.stringify(name)}</h3>
    </div>
  )
}

export default StateAsObject