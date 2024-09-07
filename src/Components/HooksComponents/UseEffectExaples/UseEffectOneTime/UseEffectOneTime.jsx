import React, { useEffect, useState } from 'react'

function UseEffectOneTime() {

       const [x, setX] = useState(0);
       const [y, setY] = useState(0);

       useEffect(() => {
            console.log("Calling UseEffect")
            window.addEventListener('mousemove',  mousePositionFun);

            return () => {
                console.log("component remove and cleaned up");
                window.removeEventListener('mousemove', mousePositionFun);
            }

       }, [ ])

       const mousePositionFun = (e) => {
        console.log("Calling mouse move function")
            setX(e.clientX)
            setY(e.clientY)
       }


  return (
    <div>
        <h3> Value of x - {x} --------------------- Value of y - {y}</h3>
    </div>
  )
}

export default UseEffectOneTime;