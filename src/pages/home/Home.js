import React, { memo, useEffect } from 'react'
import WithLayout from '../layout/Layout'
import style from './style.module.css'
function Home(props) {
    useEffect(() => {
        console.log('获取home数据')
    })
    return (
        <div className={`${style.wrapper} wrapper`}>
            首页
        </div>
    )
}
export default memo(WithLayout(Home)) 
