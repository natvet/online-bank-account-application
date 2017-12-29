import React, { Component } from 'react';
import { Form, Card } from 'semantic-ui-react';
import PersonalInfo from './PersonalInfo';
import EmploymentInfo from './EmploymentInfo';
import AccountInfo from './AccountInfo';
import DocumentsUpload from './DocumentsUpload';
import './FormContainer.css';

class FormContainer extends Component {

  render() {
    const { value, onChange } = this.props
    return (
      <Card className="c-FormContainer" fluid>
        <Card.Header>{this.props.header}</Card.Header>
        <Card.Content>
          <Form>
            <PersonalInfo/>
            <EmploymentInfo/>
            <AccountInfo value={value} onChange={onChange}/>
            <DocumentsUpload/>
            <Form.Button floated='right'>Submit Application</Form.Button>
          </Form>
        </Card.Content>
      </Card>
    );
  }
}

export default FormContainer;
