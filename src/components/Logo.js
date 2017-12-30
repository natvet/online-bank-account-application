import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import './Logo.css';

class Logo extends Component {

  render() {
    return (
      <div className='c-Logo'>
        <Icon name='leaf'/>
        <span>safe<span className='c-Logo__light'>bank</span></span>
      </div>
    );
  }
}

export default Logo;
