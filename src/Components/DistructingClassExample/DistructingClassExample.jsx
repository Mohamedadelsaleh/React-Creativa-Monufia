import React, { Component } from "react";

class DistructingClassExample extends Component {
    render() {
            const {fname, lname, age} = this.props;
            return (
                <h1>
                    Hello Creativa, This is {fname} my last name is {lname} age {age}, distructed props of Class 5
                </h1>
            )
        }
}

export default DistructingClassExample;