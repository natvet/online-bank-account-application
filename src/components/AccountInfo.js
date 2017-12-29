import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class AccountInfo extends Component {
  componentWillMount = () => {
    this.props.onMount('Account Information', 'Next')
  }

  render() {
    const { value, onChange } = this.props
    return (
      <div>
        <Form.Group inline>
          <label>Account Type</label>
          <Form.Radio label='Savings' value='savings' checked={value === 'savings'} onChange={onChange} />
          <Form.Radio label='Deposit' value='deposit' checked={value === 'deposit'} onChange={onChange} />
        </Form.Group>
        <Form.Input label='Purpose of bank account' placeholder='Purpose of bank account' />
        <Form.Input label='Where will the money come from?' placeholder='Where will the money come from?' />
        <Form.TextArea label='How did you hear about us?' placeholder='How did you hear about us?' />
      </div>
    );
  }
}

export default AccountInfo;
