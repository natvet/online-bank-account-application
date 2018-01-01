import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

const options = [
  { key: '1', text: 'Mr.', value: '1' },
  { key: '2', text: 'Mrs.', value: '2' },
  { key: '3', text: 'Ms.', value: '3' },
]

class PersonalInfo extends Component {

  handleInputChange = (e, {name, value}) => this.props.onChange(name, value)

  render() {
    return (
      <div>
        <Form.Group widths='equal'>
          <Form.Select
            label='Title'
            name='title'
            options={options}
            placeholder='Title'
            value={this.props.title}
            onChange={this.handleInputChange}
            error={this.props.showError && !this.props.title}
          />
          <Form.Input
            label='First name'
            name='firstName'
            placeholder='First name'
            value={this.props.firstName}
            onChange={this.handleInputChange}
            error={this.props.showError && !this.props.firstName}
          />
          <Form.Input
            label='Middle name'
            name='middleName'
            placeholder='middle name'
            value={this.props.middleName}
            onChange={this.handleInputChange}
          />
          <Form.Input
            label='Last name'
            name='lastName'
            placeholder='Last name'
            value={this.props.lastName}
            onChange={this.handleInputChange}
            error={this.props.showError && !this.props.lastName}
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input
            label='Home Phone'
            name='homePhone'
            placeholder='Home Phone'
            value={this.props.homePhone}
            onChange={this.handleInputChange}
            error={this.props.showError && !this.props.homePhone}
          />
          <Form.Input
            label='Mobile Phone'
            name='mobilePhone'
            placeholder='Mobile Phone'
            value={this.props.mobilePhone}
            onChange={this.handleInputChange}
            error={this.props.showError && !this.props.mobilePhone}
          />
          <Form.Input
            label='Email address'
            name='emailAddress'
            type='email'
            placeholder='Email address'
            value={this.props.emailAddress}
            onChange={this.handleInputChange}
            error={this.props.showError && !this.props.emailAddress}
          />
        </Form.Group>
        <Form.Input
          label='Mailing Address'
          name='address'
          placeholder='Mailing Address'
          value={this.props.address}
          onChange={this.handleInputChange}
          error={this.props.showError && !this.props.address}
        />
        <Form.Input
          label='Social Security Number'
          name='ssn'
          placeholder='Social Security Number'
          value={this.props.ssn}
          onChange={this.handleInputChange}
          error={this.props.showError && !this.props.ssn}
        />
      </div>
    );
  }
}

export default PersonalInfo;
