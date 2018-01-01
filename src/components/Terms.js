import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class Terms extends Component {

  handleInputChange = (e, {name}) => this.props.onChange(name)

  render() {
    return (
      <div>
        <Form.Checkbox
          label='I agree to the Terms and Conditions'
          name='terms'
          checked={this.props.terms}
          onChange={this.handleInputChange}
          error={this.props.showError && !this.props.terms}
        />
      </div>
    );
  }
}

export default Terms;
