import React, { Component } from 'react'


class Input extends Component {
    render() {
        return (
            <div>
                <span>input: {this.props.value}</span>
                <input type="text"  {...this.props}/>
            </div>
        )
    }
}

class TextArea extends Component {
    render() {
        return (
            <div>
                <span>textArea: {this.props.value}</span>
                <textarea {...this.props}></textarea>
            </div>
        )
    }
}


function WithInput(ComponetItem) {
    return class FormItem extends Component {
        constructor() {
            super()
            this.state = {
                value: ''
            }
        }
        onChangeHandler = (e) => {
            this.setState({
                value: e.target.value
            })
        }
        // shouldComponentUpdate(prev, curr) {
        //     console.log('更新了', prev, curr)
        //     return true
        // }
        render() {
            return <ComponetItem onChange = {this.onChangeHandler} value= {this.state.value}/>
        }
    }
}
const TextAreaHoc = WithInput(TextArea)
const InputHoc = WithInput(Input)

export default class Hoc extends Component {
    render() {
        return (
            <div>
                <InputHoc/>
                <TextAreaHoc />
            </div>
        )
    }
}
