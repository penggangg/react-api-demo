import React, { memo, useState } from 'react'
// import { LoginStyle } from './style'
import style from './style.module.css'
function Button(props) {
    return (
        <div className={style.button} {...props}>{props.name}</div>
    )
}

function Input(props) {
    return (
        <input {...props} />
    )
}

export default memo(function Login(props) {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    function submit() {
        console.log(props)
        if(!userName) {
            alert('请输入用户名')
            return
        }
        if(!password) {
            alert('请输入密码')
            return
        }
        props.history.push('/home')
    }
    return (
        <div className={style.login}>
            <div className={style.form}>
                <Input onChange={(e) => setUserName(e.target.value)} value={userName} type="text" placeholder="请输入账号" />
                <Input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="请输入密码" />
            </div>
            <div>
                <Button onClick={submit} name="登录" />
                <Button name="注册" />
            </div>
        </div>
    )
})
