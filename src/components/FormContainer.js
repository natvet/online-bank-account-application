import React, { Component } from 'react';
import { Form, Card, Button } from 'semantic-ui-react';
import Terms from './Terms';
import PersonalInfo from './PersonalInfo';
import EmploymentInfo from './EmploymentInfo';
import AccountInfo from './AccountInfo';
import DocumentsUpload from './DocumentsUpload';
import './FormContainer.css';

class FormContainer extends Component {
  state={
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

  handleNextClick = () => {
    const { activeView } = this.props
    if((activeView === 0 && this.isTermsConsentValid()) ||
      (activeView === 1 && this.isPersonalInfoValid()) ||
      (activeView === 2 && this.isEmploymentInfoValid()) ||
      (activeView === 3 && this.isAccountInfoValid())) {
      this.props.onNext()
    } else {
      this.setState({showError: true})
    }
  }
  handleBackClick = () => this.props.onBack()
  handleInputChange = (name, value) => this.setState({[name]: value})
  handleCheckboxChange = (name) => this.setState({[name]: !this.state[name]})
  isTermsConsentValid = () => this.state.terms
  isPersonalInfoValid = () => (
      this.state.title &&
      this.state.firstName &&
      this.state.lastName &&
      this.state.homePhone &&
      this.state.mobilePhone &&
      this.state.emailAddress &&
      this.state.address &&
      this.state.ssn
    )

  isEmploymentInfoValid = () => (
    this.state.employersName &&
    this.state.employersAddress &&
    this.state.workPhone &&
    this.state.jobPosition
  )

  isAccountInfoValid = () => (
    this.state.type &&
    this.state.purpose &&
    this.state.source &&
    this.state.whereFrom
  )

  render() {
    const { activeView } = this.props
    const views = [
      {
        component:  <Terms 
                      onChange={this.handleCheckboxChange}
                      terms={this.state.terms}
                    />,
        header: 'Terms & Conditions',
        button: 'Next',
        color: 'pink'
      },
      {
        component:  <PersonalInfo 
                      onChange={this.handleInputChange}
                      title={this.state.title}
                      firstName={this.state.firstName}
                      middleName={this.state.middleName}
                      lastName={this.state.lastName}
                      homePhone={this.state.homePhone}
                      mobilePhone={this.state.mobilePhone}
                      emailAddress={this.state.emailAddress}
                      address={this.state.address}
                      ssn={this.state.ssn}
                    />,
        header: 'Personal Information',
        button: 'Next',
        color: 'yellow'
      },
      {
        component:  <EmploymentInfo
                      onChange={this.handleInputChange}
                      employersName={this.state.employersName}
                      employersAddress={this.state.employersAddress}
                      workPhone={this.state.workPhone}
                      jobPosition={this.state.jobPosition}
                    />,
        header: 'Employment Information',
        button: 'Next',
        color: 'teal'
      },
      {
        component:  <AccountInfo
                      onChange={this.handleInputChange}
                      type={this.state.type}
                      purpose={this.state.purpose}
                      source={this.state.source}
                      whereFrom={this.state.whereFrom}
                    />,
        header: 'Account Information',
        button: 'Next',
        color: 'orange'
      },
      {
        component: <DocumentsUpload onChange={this.handleInputChange}/>,
        header: 'Documents Upload',
        button: 'Submit Application',
        color: 'olive'
      }
    ]
    return (
      <Card className='c-FormContainer' color={views[activeView].color} fluid>
        <Card.Content>
        <Card.Header>{views[activeView].header}</Card.Header>
          <Form>
            {views[activeView].component}
            <Button floated='right' onClick={this.handleNextClick}>{views[activeView].button}</Button>
            {activeView !== 0 ? <Button floated='right' onClick={this.handleBackClick}>Back</Button> : null}
          </Form>
        </Card.Content>
      </Card>
    );
  }
}

export default FormContainer;
