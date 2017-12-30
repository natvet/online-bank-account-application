import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class AccountInfo extends Component {

  handleInputChange = (e, {name, value}) => this.props.onChange(name, value)

  render() {
    return (
      <div>
        <Form.Group inline>
          <label>Account Type</label>
          <Form.Radio
            label='Savings'
            name='type'
            value='savings'
            checked={this.props.type === 'savings'}
            onChange={this.handleInputChange}
          />
          <Form.Radio
            label='Deposit'
            name='type'
            value='deposit'
            checked={this.props.type === 'deposit'}
            onChange={this.handleInputChange}
          />
        </Form.Group>
        <Form.Input
          label='Purpose of bank account'
          name='purpose'
          placeholder='Purpose of bank account'
          value={this.props.purpose}
          onChange={this.handleInputChange}
        />
        <Form.Input
          label='Where will the money come from?'
          name='source'
          placeholder='Where will the money come from?'
          value={this.props.source}
          onChange={this.handleInputChange}
        />
        <Form.TextArea
          label='How did you hear about us?'
          name='whereFrom'
          placeholder='How did you hear about us?'
          value={this.props.whereFrom}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default AccountInfo;
