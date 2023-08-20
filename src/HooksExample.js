import React, {useContext, useEffect, useState} from 'react'
import StdDetails from './StudentContext';

function HooksExample() {
    const [userName, setUserName] = useState("Besant");
    const [language, setLanguage] = useState("Javascript");
    const [count, setCount] = useState(0);
    const StdDetails = useContext(StdDetails)

    const UpdateName = () => {
        setUserName('Besant Technologies')
    }

    useEffect(() => {
        alert('Hi and Hello')
    })

    return (
        <div>
            <h1>Hooks Example</h1>
            <div>
                UserName : <span>{userName}</span>        
            </div>
            <div>
                Language : <span>{language}</span>
            </div>
            <div>
                Count : <span>{count}</span>
            </div>
            <div>
                <button onClick = {UpdateName}>Update Name</button>
            </div>
            <div>
                <h1>
                    Student Details : 
                </h1>
                <p>{StdDetails.name}</p>
                <p>{StdDetails.address}</p>
            </div>
        </div>
        
    )
}

export default HooksExample