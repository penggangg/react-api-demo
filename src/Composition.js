import React, { PureComponent } from 'react'

function Dialog(props) {
    console.log(props)
    return (
        <div>
            <span className="title">{props.title}</span>
            <span className="body">{props.children}</span>
            <span className="footer">{props.footer}</span>
        </div>
    )
}



export default class Composition extends PureComponent {
    render() {
        return (
            <div>
                <Dialog title = {'这是title'} footer= {'这是footer'}>
                    <span> 主要内容</span>
                </Dialog>
            </div>
        )
    }
}
