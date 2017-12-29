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

  handleNewViewDisplay = (header, button) => this.setState({header, button})
  handleNextClick = () => this.setState({activeView: this.state.activeView + 1})
  handleBackClick = () => this.setState({activeView: this.state.activeView - 1})

  render() {
    const { value, onChange } = this.props
    const views = [
      <PersonalInfo onMount={this.handleNewViewDisplay}/>,
      <EmploymentInfo onMount={this.handleNewViewDisplay}/>,
      <AccountInfo value={value} onChange={onChange} onMount={this.handleNewViewDisplay}/>,
      <DocumentsUpload onMount={this.handleNewViewDisplay}/>
    ]
    return (
      <Card className="c-FormContainer" fluid>
        <Card.Header>{this.state.header}</Card.Header>
        <Card.Content>
          <Form>
            {views[this.state.activeView]}
            <Button floated='right' onClick={this.handleNextClick}>{this.state.button}</Button>
            {this.state.activeView !== 0 ? <Button floated='right' onClick={this.handleBackClick}>Back</Button> : null}
          </Form>
        </Card.Content>
      </Card>
    );
  }
}

export default FormContainer;
