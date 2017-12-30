import React from 'react'
import { Step } from 'semantic-ui-react'

const Steps = () => (
  <Step.Group stackable='tablet'>
    <Step active>
      <Step.Content>
        <Step.Title>Terms and conditions</Step.Title>
      </Step.Content>
    </Step>
    <Step active>
      <Step.Content>
        <Step.Title>Personal Information</Step.Title>
      </Step.Content>
    </Step>
    <Step active>
      <Step.Content>
        <Step.Title>Employment Information</Step.Title>
      </Step.Content>
    </Step>
    <Step active>
      <Step.Content>
        <Step.Title>Account Information</Step.Title>
      </Step.Content>
    </Step>
    <Step active>
      <Step.Content>
        <Step.Title>Documents Upload</Step.Title>
      </Step.Content>
    </Step>
  </Step.Group>
)

export default Steps;
