import React, { Component } from 'react';
import FormContainer from './components/FormContainer'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="c-App">
        <div className="c-App__container">
          <header className="c-App__header">
            <h1 className="c-App__title">Bank Account Application</h1>
          </header>
          <FormContainer/>
        </div>
      </div>
    );
  }
}

export default App;
