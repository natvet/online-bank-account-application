import React from 'react'
import { Step } from 'semantic-ui-react'

const mediaQueryList = window.matchMedia("(min-width: 889px)");

class Steps extends React.Component {

  componentWillMount() {
    mediaQueryList.matches ? this.setState({isMobile: false}) : this.setState({isMobile: true})
    mediaQueryList.addListener(this.handleViewportChange)
  }

  componentWillUnmount() {
    mediaQueryList.removeListener(this.handleViewportChange)
  }

  handleViewportChange = (event) => {
    event.matches ? this.setState({isMobile: false}) : this.setState({isMobile: true})
  }

  render = () => {
    const steps = [
      {
        mobile: '1',
        desktop: 'Terms & Conditions'
      },
      {
        mobile: '2',
        desktop: 'Personal Information'
      },
      {
        mobile: '3',
        desktop: 'Employment Information'
      },
      {
        mobile: '4',
        desktop: 'Account Information'
      },
      {
        mobile: '5',
        desktop: 'Documents Upload'
      }
    ]

    return (
      <Step.Group unstackable size='mini'>
        {steps.map((step, i) => (
          <Step
            key={i}
            active={this.props.activeView === i}
            onClick={this.props.onStepClick.bind(this, i)}
            disabled={this.props.completedStep < i}
          >
            <Step.Content>
              <Step.Title>{this.state.isMobile ? step.mobile : step.desktop}</Step.Title>
            </Step.Content>
          </Step>   
        ))}
      </Step.Group>
    )
  }
}

export default Steps;
