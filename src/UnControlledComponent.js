import React, { Component} from "react";

class UnControlledComponent extends Component {

    constructor(props) {
        super(props)
        this.input = React.createRef();
        this.getDetails = this.getDetails.bind(this);
    }

    getDetails(){
        if (null != this.refs.firstname.value && "" != this.refs.firstname.value ){
            alert("First Name:"+this.refs.firstname.value+"\n Last Name:"+this.refs.lastname.value+
            "\n Address:"+this.refs.address.value)
        }else{
            alert("First Name is Mandatory")
        }
    }

    render(){
        return (
            <form>
                <div>
                    <label>First Name:</label>
                    <input type = "text" name="firstname" ref="firstname"/>
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type = "text" name="lastname" ref="lastname"/>
                </div>
                <div>
                    <label>Address:</label>
                    <input type = "text" name="adress" ref="address"/>
                </div>
                <button onClick={this.getDetails}>Submit</button>
            </form>
        )
    }
}

export default UnControlledComponent