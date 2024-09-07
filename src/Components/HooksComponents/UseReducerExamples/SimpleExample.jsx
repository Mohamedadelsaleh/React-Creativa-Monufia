import React, {useReducer} from 'react';

const initialState = 0;

const reducer = (currentState, action) => {

    switch(action){

        case 'increment':
            return currentState + 1;
        
        case 'decrement':
            return currentState - 1;
        
        case 'reset':
            return initialState;

        default:
            return currentState;

    }

}

function SimpleExample() {

        const [newState, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
        <h3>Counter ---------------------- {newState}</h3>

        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default SimpleExample