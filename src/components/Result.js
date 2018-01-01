import React, { Component } from 'react';
import { Header, Icon, Card } from 'semantic-ui-react';
import './Result.css';

class Result extends Component {

  getAccountNumber = () => Math.floor(Math.random() * (555550000000 - 555510000000 + 1)) + 555510000000
  getApplicationNumber = () => Math.floor(Math.random() * (1000 - 10000 + 1)) + 10000

  render() {
    return (
      <div className='c-Result'>
        <Header icon>
          {this.props.success ? <Icon name='check circle' color='purple'/> : null}
          Thank you for your application!
        </Header>
        {this.renderResult()}
      </div>
    )
  }

  renderResult = () => {
    if(this.props.success) {
      return (
        <div>
          <Header.Subheader>Your application has been approved</Header.Subheader>
          <Card.Description>
            <p>Your Personal Account Number:</p>
            <h4>{this.getAccountNumber()}</h4>
          </Card.Description>
        </div>
      )
    } else {
      return (
        <div>
          <Header.Subheader>Unfortunately we have not been able to process your application at the moment</Header.Subheader>
          <Card.Description>
            <p>Please contact your local safebank branch at the following number:</p>
            <h4>+66 1234567</h4>
            <p>Please refer following application number:</p>
            <h4>{this.getApplicationNumber()}</h4>
          </Card.Description>
        </div>
      )
    }
  }
}

export default Result;
