import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import file from '../assets/t&c.txt'
import './Terms.css';

class Terms extends Component {

  handleInputChange = (e, {name}) => this.props.onChange(name)

  render() {
    return (
      <div className='c-Terms'>
        <Form.Checkbox
          label='I agree to the Terms and Conditions'
          name='terms'
          checked={this.props.terms}
          onChange={this.handleInputChange}
          error={this.props.showError && !this.props.terms}
        />
        <a href={file} download>Download Terms and Conditions text</a>
      </div>
    );
  }
}

export default Terms;
