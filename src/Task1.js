import React, { Component } from 'react'

class Task1 extends Component {
    constructor(props){
        super(props)
        this.input = React.createRef();
        this.getElement = this.getElement.bind(this);
    }

    getElement(){
        if(null != this.refs.ID.value && "" != this.refs.ID.value && null != this.refs.Domain.value && "" != this.refs.Domain.value
        && null != this.refs.shift.value && "" != this.refs.shift.value){
        alert(this.refs.firstname.value +"\n"+this.refs.ID.value +"\n"+this.refs.Domain.value +"\n"+this.refs.address.value + 
        "\n"+this.refs.salary.value +"\n"+this.refs.shift.value)
    }else{
        alert("These are all mandatory")
    }
}

  render() {
    return (
      <div>
        <h1>Task1</h1>
        <form>
            <label>Name:</label>
            <input type="text" name="firstname" ref="firstname" placeholder="Name"/>
            <label>Employee ID:</label>
            <input type="text" name="ID" ref="ID" placeholder="Emp ID"/>
            <label>Domain:</label>
            <input type="text" name="Domain" ref="Domain" placeholder="Domain"/>
            <label>Address:</label>
            <input type="text" name="addres" ref="address" placeholder="address"/>
            <label>Salary:</label>
            <input type="text" name="salary" ref="salary" placeholder="salary"/>
            <label>Shift:</label>
            <input type="text" name="shift" ref="shift" placeholder="Name"/>

            <button onClick={this.getElement}>Submit</button>
        </form>
    </div>
    )
  }
}

export default Task1