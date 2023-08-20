import React,{ Component } from 'react'
import StdDetails from './StudentContext'

class StudentDetails extends Component{
    static contextType = StdDetails;
render(){
    return (
        <div>
            <h1>Student details</h1>
            
        </div>
    )
}
}

export default StudentDetails