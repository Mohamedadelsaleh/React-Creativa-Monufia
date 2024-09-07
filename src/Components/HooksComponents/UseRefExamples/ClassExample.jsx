import React from "react";

class RefsClass extends React.Component {

    constructor(){
        super();
        this.inputRef = React.createRef(null)
    }


    componentDidMount(){
        console.log(this.inputRef);
        this.inputRef.current.focus();
        
    }

    render() {
        return (
            <div>
                <div>
                    <label>Email</label>
                    <input type="text" ref={this.inputRef} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="text" />
                </div>
            </div>
        )
    }

}

export default RefsClass;