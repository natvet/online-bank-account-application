import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class EmploymentInfo extends Component {

  render() {
    return (
      <div>
        <Form.Input label='Employers Name' placeholder='Employers Name' />
        <Form.Input label='Employers Address' placeholder='Employers Address' />
        <Form.Group widths='equal'>
          <Form.Input label='Work Phone' placeholder='Work Phone' />
          <Form.Input label='Job Position' placeholder='Job Position' />
        </Form.Group>
      </div>
    );
  }
}

export default EmploymentInfo;
