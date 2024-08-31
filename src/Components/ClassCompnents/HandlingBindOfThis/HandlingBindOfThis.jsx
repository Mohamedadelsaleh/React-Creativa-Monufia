import React, { Component } from "react";


class HandlingBindOfThis extends Component {

    constructor() {
        super();
        this.state = {
            subscriber: "Guest"
        }
        // this.changeTitle = this.changeTitle.bind(this)
    }

    // changeTitle () {
    //     // console.log(this);
        
    //     this.setState({
    //         subscriber: "Asmaa"
    //     })
    // }

    changeTitle = () => {
        // console.log(this);
        
        this.setState({
            subscriber: "Ali"
        })
    }


    render() {
        return(
            <div>
                <h3>Hello name {this.state.subscriber}</h3>
                {/* 1- use bind keyword to bind handler in render method */}
                {/* <button onClick={this.changeTitle.bind(this)} >Log in</button> */}
                {/* 2- use arrow function in render method */}
                {/* <button onClick={() => this.changeTitle()} >Log in</button> */}
                {/* 3- bind event handler in constructor */}
                {/* <button onClick={this.changeTitle} >Log in</button> */}
                {/* 4- arrow function as class property */}
                <button onClick={this.changeTitle} >Log in</button>

            </div>
        )
    }

}

export default HandlingBindOfThis;