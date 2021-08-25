/**
 * 通过createContext 通信
 */
import React, { Component } from 'react'
const ThemeContext = React.createContext('')

function Button(props) {
    return (
        <div style= {props.value}>按钮</div>
    )
}
function Input(props) {
    return (
        <input type="text" style={ props.value }  placeholder="请输入" />
    )
}

function WithConsumer(Consumer) {
    return WrappedComponent => props => {
        return (
            <Consumer>
            {
               value => <WrappedComponent value={value} {...props} />
            }
            </Consumer>
        )
    }
}
function WithLog(Comp) {
    return class Log extends Component {
        componentDidMount() {
            console.log('组件挂载')
        }
        render() {
            return (
                <Comp />
            )
        }
    }
}

class Close extends Component {
    render() {
        console.log(this.props)
        return (
            <div style={ this.props.value }>关闭按钮</div>
        )
    }
}

const WithButton =WithLog(WithConsumer(ThemeContext.Consumer)(Button)) 
const WithInput = WithConsumer(ThemeContext.Consumer)(Input)
const WithClose = WithConsumer(ThemeContext.Consumer)(Close)


export default class ContextTest extends Component {
    constructor() {
        super()
        this.state = {
            theme: {
                color: 'yellow'
            }
        }
    }
    render() {
        return (
            <ThemeContext.Provider value={this.state.theme}>
                <div>
                    <WithButton name="button" />
                    <WithInput name="input" />
                    <WithClose name="close" />
                </div>
            </ThemeContext.Provider>
        )
    }
}
