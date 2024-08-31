import React, { Component } from "react";


class EventHandleClassExample extends Component {
    
    handleClick () {
        console.log("Button Clicked!");
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click me in Class</button>
            </div>
        )
    }
}

export default EventHandleClassExample;