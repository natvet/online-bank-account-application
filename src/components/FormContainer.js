import React, { Component } from 'react';
import { Form, Card, Button, Message } from 'semantic-ui-react';
import Terms from './Terms';
import PersonalInfo from './PersonalInfo';
import EmploymentInfo from './EmploymentInfo';
import AccountInfo from './AccountInfo';
import DocumentsUpload from './DocumentsUpload';
import Result from './Result';
import './FormContainer.css';

class FormContainer extends Component {
  state={}

  handleNextClick = () => {
    const { activeView } = this.props
    if((activeView === 0 && this.isTermsConsentValid()) ||
      (activeView === 1 && this.isPersonalInfoValid()) ||
      (activeView === 2 && this.isEmploymentInfoValid()) ||
      (activeView === 3 && this.isAccountInfoValid()) ||
      (activeView === 4 && this.isDocumentsUploadValid())) {
      this.props.onNext()
      this.setState({showError: false})
    } else {
      this.setState({showError: true})
    }
  }
  handleBackClick = () => this.props.onBack()
  isTermsConsentValid = () => this.props.terms
  isPersonalInfoValid = () => (
      this.props.title &&
      this.props.firstName &&
      this.props.lastName &&
      this.props.homePhone &&
      this.props.mobilePhone &&
      this.props.emailAddress &&
      this.props.address &&
      this.props.ssn
    )
  isEmploymentInfoValid = () => (
    this.props.employersName &&
    this.props.employersAddress &&
    this.props.workPhone &&
    this.props.jobPosition
  )
  isAccountInfoValid = () => (
    this.props.type &&
    this.props.purpose &&
    this.props.source &&
    this.props.whereFrom
  )
  isDocumentsUploadValid = () => (
    this.props.utilityBill &&
    this.props.securityNumber
  )
  getResult = () => Math.random() >= 0.5

  render() {
    const { 
      activeView,
      onSave,
      onBack,
      onInputChange,
      onCheckboxChange,
      terms,
      title,
      firstName,
      middleName,
      lastName,
      homePhone,
      mobilePhone,
      emailAddress,
      address,
      ssn,
      employersName,
      employersAddress,
      workPhone,
      jobPosition,
      type,
      purpose,
      source,
      whereFrom,
      utilityBill,
      securityNumber
    } = this.props
    const views = [
      {
        component:  <Terms 
                      onChange={onCheckboxChange}
                      terms={terms}
                      showError={this.state.showError}
                    />,
        header: 'Terms & Conditions',
        button: 'Next',
        color: 'pink'
      },
      {
        component:  <PersonalInfo 
                      onChange={onInputChange}
                      title={title}
                      firstName={firstName}
                      middleName={middleName}
                      lastName={lastName}
                      homePhone={homePhone}
                      mobilePhone={mobilePhone}
                      emailAddress={emailAddress}
                      address={address}
                      ssn={ssn}
                      showError={this.state.showError}
                    />,
        header: 'Personal Information',
        button: 'Next',
        color: 'yellow'
      },
      {
        component:  <EmploymentInfo
                      onChange={onInputChange}
                      employersName={employersName}
                      employersAddress={employersAddress}
                      workPhone={workPhone}
                      jobPosition={jobPosition}
                      showError={this.state.showError}
                    />,
        header: 'Employment Information',
        button: 'Next',
        color: 'teal'
      },
      {
        component:  <AccountInfo
                      onChange={onInputChange}
                      type={type}
                      purpose={purpose}
                      source={source}
                      whereFrom={whereFrom}
                      showError={this.state.showError}
                    />,
        header: 'Account Information',
        button: 'Next',
        color: 'orange'
      },
      {
        component:  <DocumentsUpload
                      onChange={onInputChange}
                      utilityBill={utilityBill}
                      securityNumber={securityNumber}
                      showError={this.state.showError}
                    />,
        header: 'Documents Upload',
        button: 'Submit Application',
        color: 'olive'
      },
      {
        component:  <Result
                      success={this.getResult()}
                    />,
        header: '',
        color: 'purple'
      }
    ]
    return (
      <Card className='c-FormContainer' color={views[activeView].color} fluid>
        <Card.Content>
        <Card.Header>{views[activeView].header}</Card.Header>
        {this.state.showError ?
          <Message
            error
            header='Please fill in all the required fileds'
          />
        : null}
          <Form>
            {views[activeView].component}
            {activeView !== 5 ?
              <div>
                <Button floated='left' onClick={onSave}>Save</Button>
                <Button floated='right' onClick={this.handleNextClick}>{views[activeView].button}</Button>
                {activeView !== 0 ? <Button floated='right' onClick={onBack}>Back</Button> : null}
              </div>
            : null}
          </Form>
        </Card.Content>
      </Card>
    );
  }
}

export default FormContainer;
