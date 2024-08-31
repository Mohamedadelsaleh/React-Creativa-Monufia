import React from "react";

// React.CreateElement( param1, param2, param3)
// param1 ------> html tag as string (reqiured)
// param2 ------> properties
// param3 ------> childern of Html tag

const Greating = () => {
    return React.createElement('div', {className : "divClass"}, 
        React.createElement('h1', {id: "h1Id"}, 
            React.createElement('span', null, "We Are in Element without JSX xxx")
        ))
};


export default Greating;