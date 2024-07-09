import React, { useState} from 'react';
import './App.css';
import Logo from './logo.svg';
import Display from './Display';
import Form from './Form';

function App() {
  return (
    <div className="wrapper">
      <img src={Logo} alt='Splitter Logo' />
      <div className='container'>
        <Form />      
        <Display/>
      </div>
    </div>
  );
}

export default App;
