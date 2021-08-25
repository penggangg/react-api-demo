import React, { useEffect, useRef, useState } from 'react'

export default function ShowCount1() {
    const [count, setcount] = useState(1)
    const countRef = useRef()
    const show = () => {
        setTimeout(() => {
            console.log(countRef.current)
        }, 2000);
    }
    // const add = () => {
    //     setcount(pre => pre + 1)
    // }
    const add=() => {
        setcount(count + 1) 
    }
    useEffect(()=> {
        countRef.current = count
    }, [count])
    return (
        <div>
            {count}
            <button onClick={show}>show1</button>
            <button onClick={add}>add1</button>
        </div>
    )
}
