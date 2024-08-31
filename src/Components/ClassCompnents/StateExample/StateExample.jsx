import React, { Component } from "react";

class StateExample extends Component {

    constructor(){
        super();
        this.state = {
            subscribe: "Visitor" //user
        }
    }

    changeMessage () {
        // this.state.subscribe = "User"; // don't mutate state directly (interview)

        this.setState({
            subscribe: "user"
        }, () => {
            console.log(this.state.subscribe);
        })
        
    }

    render() {
        return (
            <div>
                <h1> Hello {this.state.subscribe}! </h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }

}

export default StateExample;