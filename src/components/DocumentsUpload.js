import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class DocumentsUpload extends Component {

  handleInputChange = (e, {name, value}) => this.props.onChange(name, value)

  render() {
    return (
      <div>
        <Form.Input
          type='file'
          label='Upload utility bill'
          name='utilityBill'
          onChange={this.handleInputChange}
          error={this.props.showError && !this.props.utilityBill}
        />
        <Form.Input
          type='file'
          label='Upload social security number'
          name='securityNumber'
          onChange={this.handleInputChange}
          error={this.props.showError && !this.props.securityNumber}
        />
      </div>
    );
  }
}

export default DocumentsUpload;
