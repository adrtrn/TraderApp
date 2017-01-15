import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';


class WelcomeView extends Component {

  render() {
    var view;
    var username = this.props.username

    if (username) {
      view = <h1>Welcome {username}</h1>    
    } else {
      view = <input onKeyPress={this.props._onName} placeholder="Please enter your username" />
    }
    return view;
  }

}

export default WelcomeView;