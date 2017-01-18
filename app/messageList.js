import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

class MessageList extends Component {
  render(){
    var list = this.props.messages.map(function(message){
      return message;
    }
      
      return (
        <View>
          <Text>{message.username} - {message.time}</Text>
          <Text>{message.text}</Text>
        </View>
      )
    });
      return (
          {list}
      );
  }
}
