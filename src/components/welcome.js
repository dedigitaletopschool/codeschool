import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import WelcomeHeader from './welcome-header';
import BottomBar from './bottom-bar';
import FirstExplanation from './first-explanation'

import '../../style/Welcome.scss';

class Welcome extends Component {

  constructor() {
    super();
    this.state = { step: 1 };
  }

  this.setState({
    step: this.props.step + 1
  })

	render() {
		switch (this.state.step) {
			case 1:
				return (
          <div className="Welcome">
            <WelcomeHeader></WelcomeHeader>
            <BottomBar step={this.state.step}></BottomBar>
          </div>
        )
      case 2:
				return (
          <div className="Welcome">
            <FirstExplanation></FirstExplanation>
            <BottomBar></BottomBar>
          </div>
        )
  		}
    }
  }



export default connect()(Welcome);
