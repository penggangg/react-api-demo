import React, { memo, useEffect } from 'react'

export default memo( function UseRef() {
    useEffect(()=> {
        console.log('useRef')
    })
    return (
        <div>
            useRef
        </div>
    )
})
