import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

const options = [
  { key: '1', text: 'Mr.', value: '1' },
  { key: '2', text: 'Mrs.', value: '2' },
  { key: '3', text: 'Ms.', value: '3' },
]

class PersonalInfo extends Component {

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default PersonalInfo;
