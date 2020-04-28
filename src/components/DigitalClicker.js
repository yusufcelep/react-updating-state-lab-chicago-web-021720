// Code DigitalClicker Component Here
import React from 'react'

export default class DigitalClicker extends React.Component {
    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    handleClick() {
        this.setState({
            timeClicked: ++this.state.timesClicked
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick.bind(this)}>{this.state.timeClicked}</button>
            </div>
        )
    }
}