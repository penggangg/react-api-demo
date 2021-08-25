import React, { memo, useEffect } from 'react'
import WithLayout from '../layout/Layout'
function Cart() {
    useEffect(() => {
        console.log('获取Cart数据')
    })
    return (
        <div className={`wrapper`}>
            购物车
        </div>
    )
}
export default memo(WithLayout(Cart)) 