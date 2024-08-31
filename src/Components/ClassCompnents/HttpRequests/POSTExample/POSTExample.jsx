import axios from "axios";
import React, { Component } from "react";


class POSTExample extends Component {

    constructor() {
        super();
        this.state ={
            userId: "", //default values
            title: "",
            body: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then((response) => {
            console.log(response.data);
            
        })
        
    }


    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>User ID</label>
                    <input type="text" name="userId" value={this.state.userId} onChange={this.handleChange}/>
                </div>
                <div>
                    <label>Title</label>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
                </div>
                <div>
                    <label>Body</label>
                    <input type="text" name="body" value={this.state.body} onChange={this.handleChange}/>
                </div>
                <button type="submit">Add Data to API</button>
            </form>
        )
    }
}

export default POSTExample;