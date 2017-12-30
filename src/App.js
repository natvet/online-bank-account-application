import React, { Component } from 'react';
import FormContainer from './components/FormContainer'
import Logo from './components/Logo'
import Steps from './components/Steps'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className='c-App'>
        <div className='c-App__container'>
          <header className='c-App__header'>
            <Logo/>
            <h1 className='c-App__title'>Personal Account Application</h1>
          </header>
          <Steps/>
          <FormContainer/>
        </div>
      </div>
    );
  }
}

export default App;
