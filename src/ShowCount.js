import React, { Component } from 'react'

export default class ShowCount extends Component {
    constructor() {
        super()
        this.state = {
            count: 1
        }
    }
    show = () => {
        setTimeout(() => {
            console.log(this.state.count)
        }, 2000);
    }
    add = () => {
        this.setState({
            count: 5
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.show}>show</button>
                <button onClick={this.add}>add</button>
            </div>
        )
    }
}
