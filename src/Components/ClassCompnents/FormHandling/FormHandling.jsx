import React, { Component } from "react";

class FromHandling extends Component {

    constructor(){
        super();
        this.state = {
            userName: "", 
            opinions: "",
            course: "",
        }
    }


    handleUserNameChange = (event) => {
        this.setState({
            userName: event.target.value
        },() => {
            console.log(this.state);
            
        })
        
    }

    handleOpinionChange = (event) => {
        this.setState({
            opinions: event.target.value
        }, () => {
            console.log(this.state);
            
        })
        
    }

    handleSelect = (event) => {
        console.log(event);
        this.setState({
            course: event.target.value
        });
    }

    render() {
     const number = 10;

        return(
            <form>
                <div>
                    <label>User Name</label>
                    <input type="text" value={this.state.userName} onChange={this.handleUserNameChange} />
                </div>
                <div>
                    <label>Opinions</label>
                    <textarea value={this.state.opinions} onChange={this.handleOpinionChange}></textarea>
                </div>
                <div>
                    <label>Select Course</label>
                    <select value={this.state.course} onChange={this.handleSelect}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                        <option value="Node">Node</option>
                        <option value="Python">Python</option>
                    </select>
                </div>
            </form>
        )
    }
}

export default FromHandling;