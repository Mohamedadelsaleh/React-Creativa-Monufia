import React from "react";


const DistructingEx = (prpos) => {
    console.log("Props:", prpos);
    const {fname, lname} = prpos
    
    return(
        <h1>
            Hello Creativa, This is {fname} my last name is {lname}, distructed props 2
        </h1>
    )
}

export default DistructingEx;