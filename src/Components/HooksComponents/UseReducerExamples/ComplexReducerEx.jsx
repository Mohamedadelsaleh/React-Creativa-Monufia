import React, {useReducer} from 'react';

const initialState = {
    firstState: 0,
    secondState: 7,
    password: "",
    userName: "",
};

const reducer = (currentState, action) => {

    switch(action.type){

        case 'increment':
            return {...currentState, firstState: currentState.firstState + action.payload};
        
        case 'decrement':
            return {...currentState, firstState: currentState.firstState - action.payload};

        case 'incrementSecondCounter':
            return {...currentState, secondState: currentState.secondState + action.payload};
        
        case 'decrementSecondCounter':
            return {...currentState, secondState: currentState.secondState - action.payload};

        case 'changeUserName':
            return {...currentState, userName: action.payload}
        
        case 'reset':
            return initialState;

        default:
            return currentState;

    }

}

function ComplexReducerEx() {

        const [newState, dispatch] = useReducer(reducer, initialState)
        
  return (
    <div>
        <h3>First Counter Complex ---------------------- {newState.firstState}</h3>

        <button onClick={() => dispatch({type: 'increment', payload: 1})}>Increment</button>
        <button onClick={() => dispatch({type: 'decrement', payload: 1})}>Decrement</button>
        <button onClick={() => dispatch({type: 'increment', payload: 10})}>Increment by 10</button>
        <button onClick={() => dispatch({type: 'decrement', payload: 10})}>Decrement by 10</button>

        <h3> Second Counter Complex ---------------------- {newState.secondState}</h3>
        <h3> User Name Complex ---------------------- {newState.userName}</h3>

        <div>
            <button onClick={() => dispatch({type: 'incrementSecondCounter', payload: 5})}>Increment by 5</button>
            <button onClick={() => dispatch({type: 'decrementSecondCounter', payload: 5})}>Decrement by 5</button>
        </div>
        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        <input type='text' value={newState.userName} onChange={(e) => dispatch({type: 'changeUserName', payload: e.target.value })}/>

    </div>
  )
}

export default ComplexReducerEx;