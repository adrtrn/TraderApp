import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

class MainView extends Component {

  getInitialState() {
    return {
      messages: [] 
    };
  }

  componentWillMount() {
    this.pusher = new Pusher('4adf85492acfebaad8bb')
    this.chatRoom = this.pusher.subscribe('messages')
  }

  componentDidMount() {
    this.chatRoom.bind('new_message', function(message){
      this.setState({messages: this.state.messages.concat(message)})
    }, this);
  }

  _onMessage(e) {
    if (e.nativeEvent.keyCode != 13) return;

    var input = e.target;
    var text = input.value;

    // if the text is blank, do nothing
    if (text === "") return;

    var message = {
      username: this.props.username,
      text: text,
      time: new Date()
    }

    $.post('/messages', message).success(function(){
      // reset the input
      input.value = ""
    });
  }
  render() {
    if (!this.props.username) var style = {display:'none'}

    return (
      <View>
        <input placeholder="Type your message" onKeyPress={this._onMessage} />
      </View>
    );
  }
}