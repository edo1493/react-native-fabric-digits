import React, { Component } from 'react';
import { NativeModules, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

class DigitsLoginButton extends Component {
  constructor(props) {
    super(props);

    this.buttonPressed = this.buttonPressed.bind(this);
    this.getSessionDetails = this.getSessionDetails.bind(this);
  }

  getSessionDetails(callback) {
    NativeModules.DigitsManager.sessionDetails((error, sessionDetails) => {
      if (error) {
        console.error(error);
      } else {
        callback(sessionDetails);
      }
    });
  }

  buttonPressed() {
    NativeModules.DigitsManager.launchAuthentication(this.props.options).then((responseData) => {
      console.log("[Digits] Login Successful", responseData);
      this.props.completion(null, responseData);
    }).catch((error) => {
      if(error && error.code != 1){
        console.error("[Digits] Login Error", error);
      }
      this.props.completion(error, null);
    });
  }

  renderButtonContent() {
    if(this.props.isLoading)
      return (<ActivityIndicator color='#fff'/>)
    else
      return (<Text style={this.props.textStyle}>{this.props.text}</Text>)
  }

  render() {
    return (
      <TouchableOpacity style={this.props.buttonStyle} onPress={this.buttonPressed} disabled={this.props.isLoading}>
        {this.renderButtonContent()}
      </TouchableOpacity>
    );
  }
}

DigitsLoginButton.defaultProps = {
  highlightColor: 'black',
};

module.exports = DigitsLoginButton;
