import React, { Component } from "react";
import EventHandleClassExample from "../EventHandleClassExample/EventHandleClassExample";
import Greating from "../WithoutJSX/WithoutJSX";


class ConditionalRenedering extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            user: "Tasneem"
        }
    }
    // 1- If/else 
    // render() {
    //     if(this.state.isLoggedIn) {
    //         return (
    //             <div>Hello User</div>
    //         )
    //     }else {
    //         return (
    //             <div>Hello Guest</div>
    //         )  
    //     }
    // }


    // 2- Element Variable
    // render(){
    //     let renderedElement;
    //     if(this.state.isLoggedIn){
    //         renderedElement = <div>Hello User</div>
    //     }else{
    //         renderedElement = <div>Hello Guest</div>
    //     }
    //     return (
    //         <div>
    //             {renderedElement}
    //         </div>
    //     )
    // }

    // 3- Ternary Operator
    render(){
        return (
            <div>
                {this.state.isLoggedIn ? 
                        <EventHandleClassExample/> : 
                        this.state.user === "Tasneem" ?
                        <Greating /> : 
                        <h1> No condition is activated</h1>
                }
            </div>

            // 4- Short Circut
            // () && ()
            // <div>
            //     {this.state.isLoggedIn && (<div>Hello User</div>)}
            //     {!this.state.isLoggedIn && (<div>Hello Guest Short ciruct</div>)}
            // </div>

        )
    }
}

export default ConditionalRenedering;