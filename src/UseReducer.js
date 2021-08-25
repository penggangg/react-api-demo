import React, { useReducer } from 'react'
const initialState = {count: 0}
const reducer = function(state, action) {
    switch (action.type) {
        case 'add':
            return {count: state.count + 1 }
        case 'reduce':
            return {count: state.count - 1 }
        case 'reset':
                return initialState    
        default:
            throw new Error();
    }
}

export default function UseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            UseReducer: {state.count}
            <button onClick={() => dispatch({type: 'add'})}>add</button>
            <button onClick={() => dispatch({type: 'reduce'})}>reduce</button>
            <button onClick={() => dispatch({type: 'reset'})}>reset</button>
        </>
    )
}
