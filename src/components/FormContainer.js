import React, { Component } from 'react';
import { Form, Card, Button, Message } from 'semantic-ui-react';
import Terms from './Terms';
import PersonalInfo from './PersonalInfo';
import EmploymentInfo from './EmploymentInfo';
import AccountInfo from './AccountInfo';
import DocumentsUpload from './DocumentsUpload';
import Result from './Result';
import Steps from './Steps';
import './FormContainer.css';

const mediaQueryList = window.matchMedia("(min-width: 889px)");

class FormContainer extends Component {
  state={}

  componentWillMount() {
    mediaQueryList.matches ? this.setState({isMobile: false}) : this.setState({isMobile: true})
    mediaQueryList.addListener(this.handleViewportChange)
  }

  componentWillUnmount() {
    mediaQueryList.removeListener(this.handleViewportChange)
  }

  handleViewportChange = (event) => {
    event.matches ? this.setState({isMobile: false}) : this.setState({isMobile: true})
  }

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
      window.scrollTo(0,0)
    }
  }
  handleBackClick = () => this.props.onBack()
  isTermsConsentValid = () => this.props.terms
  isPersonalInfoValid = () => (
      this.isEmailValid() &&
      this.props.title &&
      this.props.firstName &&
      this.props.lastName &&
      this.props.homePhone &&
      this.props.homePhoneCode &&
      this.props.mobilePhone &&
      this.props.mobilePhoneCode &&
      this.props.address &&
      this.props.ssn
    )
  isEmploymentInfoValid = () => (
    this.props.employersName &&
    this.props.employersAddress &&
    this.props.workPhone &&
    this.props.workPhoneCode &&
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
  isEmailValid = () => {
    const test = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return test.test(this.props.emailAddress) && this.props.emailAddress
  }
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
      homePhoneCode,
      mobilePhone,
      mobilePhoneCode,
      emailAddress,
      address,
      ssn,
      employersName,
      employersAddress,
      workPhone,
      workPhoneCode,
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
                      homePhoneCode={homePhoneCode}
                      mobilePhone={mobilePhone}
                      mobilePhoneCode={mobilePhoneCode}
                      emailAddress={emailAddress}
                      address={address}
                      ssn={ssn}
                      showError={this.state.showError}
                      isEmailValid={this.isEmailValid}
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
                      workPhoneCode={workPhoneCode}
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
    const buttonSize = this.state.isMobile ? 'tiny' : 'medium'
    return (
      <Card className='c-FormContainer' color={views[activeView].color} fluid>
        <Card.Content className='c-FormContainer__content'>
        {this.renderSteps()}
          {this.props.showSaved ?
            <Message
              className='c-FormContainer__msg'
              success
              size='tiny'
              header='Your answers have been saved'
            />
          : null}
          {this.state.showError ?
          <Message
            className='c-FormContainer__error-msg'
            error
            size='tiny'
            header='Please fill in required fileds with the correct data'
          />
          : null}
          <Form className='c-FormContainer__form'>
            <h3 className='c-FormContainer__header'>{views[activeView].header}</h3>
            <div>
              {views[activeView].component}
            </div>
            {activeView !== 5 ?
            <div className='c-FormContainer__buttons'>
              <Button floated='left' size={buttonSize} onClick={onSave}>Save</Button>
              <Button floated='right' size={buttonSize} primary onClick={this.handleNextClick}>{views[activeView].button}</Button>
              {activeView !== 0 ? <Button floated='right' size={buttonSize} onClick={onBack}>Back</Button> : null}
            </div>
            : null}
          </Form>
        </Card.Content>
      </Card>
    );
  }
  renderSteps = () => this.props.activeView !== 5 ? <Steps activeView={this.props.activeView}/> : null
}

export default FormContainer;
