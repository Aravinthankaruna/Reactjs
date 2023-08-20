import React, { Component } from 'react';
class ClassComponent extends Component {

    
    

      render() {
        return (
          <div>ClassComponent</div>
        )
      }
        
    
    constructor(){
        super();
        this.state = {
            name: "Monesh",
            location: "Chennai",
            age: 24,
        }
        this.changeage = this.changeage.bind(this);
        this.changename = this.changename.bind(this);
    }

    changeage(){
        this.setstate({
            age: this.state.age + 1
        })
    }

    changename() {
        this.setstate({
            name: "Aravinthan"
        })
    }
    render() {
        return (
            <div>
                <p>{this.state.name}</p>
                <p>{this.state.location}</p>
                <p>{this.state.age}</p>
                <button onClick={this.changeage}>Age</button>
                <button onClick={this.changename}>Name</button>
            </div>
        )
    }
}

export default ClassComponent