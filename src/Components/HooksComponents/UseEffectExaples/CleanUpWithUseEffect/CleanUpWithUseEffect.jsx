import React, { useState } from 'react'
import UseEffectOneTime from '../UseEffectOneTime/UseEffectOneTime';

function CleanUpWithUseEffect() {

    const [display, setDisplay]= useState(true);

  return (
    <div>
        <button onClick={() => setDisplay(!display)}> Diplay Component</button>
        {display ? <UseEffectOneTime /> : null}
    </div>

  )
}

export default CleanUpWithUseEffect