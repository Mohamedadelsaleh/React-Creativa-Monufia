import React, { Component } from "react";

class StateWithClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }

        this.handleCounter = this.handleCounter.bind(this)
    }

    handleCounter(){
        this.setState({counter: this.state.counter + 1})
    }


    render(){
        return (
            <div>
                    <h3> Counter: {this.state.counter}</h3>
                    <button onClick={this.handleCounter}>Increment</button>
            </div>
        )
    }
}

export default StateWithClass;