import React, { useMemo, useState } from 'react'

export default function UseMemo() {
    const [count, setCount] = useState(1)
    const [dep, setDep] = useState(0)
    const total = () => {
        console.log('total')
        return 2 * count
    }
    const memoTotal = useMemo(()=> {
        console.log('memoTotal')
        return 2 * count
    }, [count])
    const add=()=> {
        setDep(pre => pre + 1)
    }
    const addCount = () => {
        setCount(pre => pre + 1)
    }
    return (
        <>
            <div>count: {count}</div>
            <div>dep: {dep}</div>
            <div>total: {total()}</div>
            <div>memoTotal: {memoTotal}</div>
            <button onClick={add}>添加dep</button>
            <button onClick={addCount}>添加count</button>
        </>
    )
}
