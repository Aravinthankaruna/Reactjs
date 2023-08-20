import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import ClassComponent from './UnControlledComponent.js';
import UnControlledComponent from './UnControlledComponent.js';
import Listexample from './listexample';
import Task1 from './Task1';
import React from 'react';
import HooksExample from './HooksExample'
import StdDetails from './StudentContext';

function App() {
  
  return (
    <>
      <React.Fragment>
        <StdDetails.Provider value = {{name:'Ranjith', age : 24 , marks : '459',
        address : 'Chennai', contactNo : '8667406745'}}>
          <HooksExample/>
        </StdDetails.Provider>
      </React.Fragment>
    </>
    
  );
}

export default App;
