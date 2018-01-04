import React, { Component } from 'react';
import FormContainer from './components/FormContainer'
import Logo from './components/Logo'
import './App.css';

const initialModel = {
  activeView: 0,
  title: '',
  firstName: '',
  middleName: '',
  lastName: '',
  homePhone: '',
  mobilePhone: '',
  emailAddress: '',
  address: '',
  ssn: '',
  employersName: '',
  employersAddress: '',
  workPhone: '',
  jobPosition: '',
  type: '',
  purpose: '',
  source: '',
  whereFrom: ''
}

class App extends Component {

  componentWillMount = () => {
    const updatedState = JSON.parse(localStorage.getItem('progress')) || initialModel
    this.setState({...updatedState})
  }

  handleSaveClick = () => {
    localStorage.setItem('progress', JSON.stringify(this.state))
    this.setState({showSaved: true})
    window.scrollTo(0,0)
  }
  handleInputChange = (name, value) => this.setState({[name]: value, showSaved: false})
  handleCheckboxChange = (name) => this.setState({[name]: !this.state[name], showSaved: false})
  handleNext = () => this.setState({activeView: this.state.activeView + 1, showSaved: false})
  handleBack = () => this.setState({activeView: this.state.activeView - 1, showSaved: false})

  render() {
    return (
      <div className='c-App'>
        <div className='c-App__container'>
          <header className='c-App__header'>
            <Logo/>
            <h1 className='c-App__title'>Personal Account Application</h1>
          </header>
          <FormContainer
            onSave={this.handleSaveClick}
            showSaved={this.state.showSaved}
            onNext={this.handleNext}
            onBack={this.handleBack}
            activeView={this.state.activeView}
            onInputChange={this.handleInputChange}
            onCheckboxChange={this.handleCheckboxChange}
            {...this.state}
          />
        </div>
      </div>
    );
  }
}

export default App;
