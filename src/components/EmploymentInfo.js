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
          error={this.props.showError && !this.props.employersName}
        />
        <Form.Input
          label='Employers Address'
          name='employersAddress'
          placeholder='Employers Address'
          value={this.props.employersAddress}
          onChange={this.handleInputChange}
          error={this.props.showError && !this.props.employersAddress}
        />
        <Form.Group widths='equal'>
          <Form.Input
            label='Work Phone'
            name='workPhone'
            placeholder='Work Phone'
            value={this.props.workPhone}
            onChange={this.handleInputChange}
            error={this.props.showError && !this.props.workPhone}
          />
          <Form.Input
            label='Job Position'
            name='jobPosition'
            placeholder='Job Position'
            value={this.props.jobPosition}
            onChange={this.handleInputChange}
            error={this.props.showError && !this.props.jobPosition}
          />
        </Form.Group>
      </div>
    );
  }
}

export default EmploymentInfo;
