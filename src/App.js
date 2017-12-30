import React, { Component } from 'react';
import FormContainer from './components/FormContainer'
import './App.css';

class App extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    return (
      <div className="c-App">
        <div className="c-App__container">
          <header className="c-App__header">
            <h1 className="c-App__title">Bank Account Application</h1>
          </header>
          <FormContainer value={this.state.value} onChange={this.handleChange}/>
        </div>
      </div>
    );
  }
}

export default App;
