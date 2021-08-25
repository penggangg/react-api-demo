import React, { Component } from 'react'

class Cat extends Component {
    render() {
        const { mouse } = this.props
        return (
            <div style={{width: '20px', height: '20px', background: 'red', position: 'absolute', left: mouse.x, top: mouse.y}}></div>
        )
    }
}


function WithCat(Comp) {
    return class Mouse extends Component {
        constructor() {
            super()
            this.state = {
                mousePostion: {
                    x: 0,
                    y: 0
                }
            }
        }
        mouseHandler = (e) => {
            let { clientX, clientY } = e
            this.setState({
                mousePostion: {
                    x: clientX,
                    y: clientY
                }
            })
        }
        render() {
            return (
                <div style={{height: '100vh'}} onMouseMove = {this.mouseHandler}>
                    {/* <h1>鼠标移动</h1>
                    <h1>鼠标位置 X: {this.state.mousePostion.x} Y: {this.state.mousePostion.y}</h1> */}
                    {/* {this.props.render(this.state.mousePostion)} */}
                    <Comp {...this.props} mouse={{x: this.state.mousePostion.x, y: this.state.mousePostion.y}} />
                </div>
            )
        }
    }
}
export default WithCat(Cat)
// export default class WithCat extends Component {
//     render() {
//         return (
//             <div>
//                 <Mouse render={mouse => (<Cat mouse ={mouse} />)} >
//                 </Mouse>
//             </div>
//         )
//     }
// }