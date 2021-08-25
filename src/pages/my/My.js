import React, { memo, useEffect } from 'react'
import WithLayout from '../layout/Layout'
function My() {
    useEffect(() => {
        console.log('获取My数据')
    })
    return (
        <div className={`wrapper`}>
            我的
        </div>
    )
}
export default memo(WithLayout(My)) 