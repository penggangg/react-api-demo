import React from 'react'

export default function UseState({count, setCount}) {
    const reduce = () => {
        setCount(prevCount => prevCount - 1)
    }
    const add = () => {
        setCount(prevCount => prevCount + 1)
    }
    const reset = () => {
        setCount(0)
    }
    return (
        <div>
            <button>{count}</button>
            <button onClick={reset}>reset</button>
            <button onClick={add}>add</button>
            <button onClick={reduce}>reduce</button>
        </div>
    )
}
