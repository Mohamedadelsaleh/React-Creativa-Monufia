import axios from "axios";
import React, { Component } from "react";
import './style.css'

class GETExample extends Component {

    constructor(){
        super();
        this.state= {
            posts:[],
            loading: true
        };
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            console.log(response.data)
            this.setState({posts: response.data, loading: false});   
        }).catch((error) => {console.log(error)});
        
    }

    render() {
        const {posts} = this.state;
        return (
            <div className="container">
            {
                this.state.loading ? (
                    <h1>loading ........</h1>
                ) : (

                    posts.map((post) => (
                        <div className="card" key={post.id}>
                            <h3>{post.title}</h3>
                        </div>
                    ))
                )
            }
                

            </div>
        )
    }
}

export default  GETExample;