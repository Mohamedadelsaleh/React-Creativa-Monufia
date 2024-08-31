import React from "react";

const Hello = (props) => {
    console.log("Props: ", props);
    console.log( props.fname);

    return(
        <div>
            <h3> Hello {props.fname} {props.lname ? props.lname : null}</h3>
            {props.children}
        </div>
     )
}

export default Hello;