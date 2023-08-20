import React, { Component } from 'react'

class Listexample extends Component {
  render() {
    var dept = ["Civil","Mech","CS"];

    var dept2 = dept.map(dept3 => {
         return <li>{dept3}</li>})
    return (
      <div>
        <h1>listexample</h1>
        
      <ul>
        {dept2}
      </ul>
      </div>
    )
  }
}

export default Listexample