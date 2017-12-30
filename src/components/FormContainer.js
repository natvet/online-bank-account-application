import React, { Component } from 'react';
import { Form, Card, Button } from 'semantic-ui-react';
import PersonalInfo from './PersonalInfo';
import EmploymentInfo from './EmploymentInfo';
import AccountInfo from './AccountInfo';
import DocumentsUpload from './DocumentsUpload';
import './FormContainer.css';

class FormContainer extends Component {
  state={
    activeView: 0
  }

  handleNextClick = () => this.setState({activeView: this.state.activeView + 1})
  handleBackClick = () => this.setState({activeView: this.state.activeView - 1})

  render() {
    const { activeView } = this.state
    const { value, onChange } = this.props
    const views = [
      {
        component: <PersonalInfo onMount={this.handleNewViewDisplay}/>,
        header: 'Personal Information',
        button: 'Next'
      },
      {
        component: <EmploymentInfo onMount={this.handleNewViewDisplay}/>,
        header: 'Employment Information',
        button: 'Next'
      },
      {
        component: <AccountInfo value={value} onChange={onChange} onMount={this.handleNewViewDisplay}/>,
        header: 'Account Information',
        button: 'Next'
      },
      {
        component: <DocumentsUpload onMount={this.handleNewViewDisplay}/>,
        header: 'Documents Upload',
        button: 'Submit Application'
      }
    ]
    return (
      <Card className="c-FormContainer" fluid>
        <Card.Content>
        <Card.Header>{views[activeView].header}</Card.Header>
          <Form>
            {views[activeView].component}
            <Button floated='right' onClick={this.handleNextClick}>{views[activeView].button}</Button>
            {this.state.activeView !== 0 ? <Button floated='right' onClick={this.handleBackClick}>Back</Button> : null}
          </Form>
        </Card.Content>
      </Card>
    );
  }
}

export default FormContainer;
