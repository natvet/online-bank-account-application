import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'
import './App.css';

const options = [
  { key: '1', text: 'Mr.', value: '1' },
  { key: '2', text: 'Mrs.', value: '2' },
  { key: '3', text: 'Ms.', value: '3' },
]

class App extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <div className="c-App">
        <div className="c-App__container">
          <header className="c-App__header">
            <h1 className="c-App__title">Online bank account application</h1>
          </header>
          <Form>
            <Form.Group widths='equal'>
              <Form.Select label='Title' options={options} placeholder='Title' />
              <Form.Input label='First name' placeholder='First name' />
              <Form.Input label='Middle name' placeholder='Middle name' />
              <Form.Input label='Last name' placeholder='Last name' />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input label='Home Phone' placeholder='Home Phone' />
              <Form.Input label='Mobile Phone' placeholder='Mobile Phone' />
              <Form.Input label='Email address' placeholder='Email address' />
            </Form.Group>
            <Form.Input label='Mailing Address' placeholder='Mailing Address' />
            <Form.Input label='Social Security Number' placeholder='Social Security Number' />
            <Form.Input label='Employers Name' placeholder='Employers Name' />
            <Form.Input label='Employers Address' placeholder='Employers Address' />
            <Form.Group widths='equal'>
              <Form.Input label='Work Phone' placeholder='Work Phone' />
              <Form.Input label='Job Position' placeholder='Job Position' />
            </Form.Group>
            <Form.Group inline>
              <label>Account Type</label>
              <Form.Radio label='Savings' value='savings' checked={value === 'savings'} onChange={this.handleChange} />
              <Form.Radio label='Deposit' value='deposit' checked={value === 'deposit'} onChange={this.handleChange} />
            </Form.Group>
            <Form.Input label='Purpose of bank account' placeholder='Purpose of bank account' />
            <Form.Input label='Where will the money come from?' placeholder='Where will the money come from?' />
            <Form.TextArea label='How did you hear about us?' placeholder='How did you hear about us?' />
            <Form.Group>
              <Form.Button size='mini' primary>Upload utility bill</Form.Button>
              <Form.Button size='mini' primary>Upload social security number</Form.Button>
            </Form.Group>
            <Form.Button floated='right'>Submit Application</Form.Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default App;
