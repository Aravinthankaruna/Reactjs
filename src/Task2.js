import React, { Component } from 'react'

class Task2 extends Component {

    constructor(props){
        super(props)
        this.state = {
            name: "Aravinthan",
            Age: 26,
        }
        this.changeage = this.changeage.bind(this);
    }

  render() {
    return (
      <div>Task2</div>

    )
  }
}

export default Task2