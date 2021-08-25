import React, { memo, useEffect } from 'react'
export default memo(function Footer(props) {
    const getClassName = path=>{
        return  props.route.path === path ? 'nav-active' : ''
    }
    function routeHandler(path) {
        if (path === props.route.path) return
        props.history.push(path) 
    }
    useEffect(() => {
        document.title = props.route.meta.title
    })
    return (
        <div className="footer">
            <ul>
                <li className={ getClassName('/home') } onClick={() => routeHandler('/home')} >首页</li>
                <li className={ getClassName('/cart') } onClick={() => routeHandler('/cart')} >购物车</li>
                <li className={ getClassName('/my') } onClick={() => routeHandler('/my')} >我的</li>
            </ul>
        </div>
    )
}) 
