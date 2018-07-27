import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { sampleAction } from './actions/sampleActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
      ...state
  }
}
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {sampleAction},
        dispatch
    )


class App extends Component {
    componentDidMount() {
        this.props.sampleAction()
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            {this.props.sample.welcomeText}
        </p>
      </div>
    );
  }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
