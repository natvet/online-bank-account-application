import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class EmploymentInfo extends Component {

  handleInputChange = (e, {name, value}) => this.props.onChange(name, value)

  render() {
    return (
      <div>
        <Form.Input
          label='Employers Name'
          name='employersName'
          placeholder='Employers Name'
          value={this.props.employersName}
          onChange={this.handleInputChange}
        />
        <Form.Input
          label='Employers Address'
          name='employersAddress'
          placeholder='Employers Address'
          value={this.props.employersAddress}
          onChange={this.handleInputChange}
        />
        <Form.Group widths='equal'>
          <Form.Input
            label='Work Phone'
            name='workPhone'
            placeholder='Work Phone'
            value={this.props.workPhone}
            onChange={this.handleInputChange}
          />
          <Form.Input
            label='Job Position'
            name='jobPosition'
            placeholder='Job Position'
            value={this.props.jobPosition}
            onChange={this.handleInputChange}
          />
        </Form.Group>
      </div>
    );
  }
}

export default EmploymentInfo;
