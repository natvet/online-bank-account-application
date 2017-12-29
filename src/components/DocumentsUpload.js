import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class DocumentsUpload extends Component {

  render() {
    return (
      <div>
        <Form.Group>
          <Form.Button size='mini' primary>Upload utility bill</Form.Button>
          <Form.Button size='mini' primary>Upload social security number</Form.Button>
        </Form.Group>
      </div>
    );
  }
}

export default DocumentsUpload;
