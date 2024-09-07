import React from "react";

class ClassExample extends React.Component {

    constructor(){
        super();
        this.state = {
            counter: 0
        }
    }

    componentDidMount(){
        document.title = `clicked ${this.state.counter} times`
    }

    componentDidUpdate(prevProps, prevState){
        document.title = `clicked ${this.state.counter} times `
    }


    render() {
        return(
            <div>
                <button onClick={() => this.setState({counter: this.state.counter + 1})}>Click me --- {this.state.counter} times</button>
            </div>
        )
    }
}

export default ClassExample;