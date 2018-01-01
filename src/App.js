import React, { Component } from 'react';
import FormContainer from './components/FormContainer'
import Logo from './components/Logo'
import Steps from './components/Steps'
import './App.css';

class App extends Component {
   state={
    activeView: 0
  }

  handleNext = () => this.setState({activeView: this.state.activeView + 1})
  handleBack = () => this.setState({activeView: this.state.activeView - 1})

  render() {
    return (
      <div className='c-App'>
        <div className='c-App__container'>
          <header className='c-App__header'>
            <Logo/>
            <h1 className='c-App__title'>Personal Account Application</h1>
          </header>
          <Steps
            activeView={this.state.activeView}
          />
          <FormContainer
            onNext={this.handleNext}
            onBack={this.handleBack}
            activeView={this.state.activeView}
          />
        </div>
      </div>
    );
  }
}

export default App;
