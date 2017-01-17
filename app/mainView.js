import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableHighlight,
} from 'react-native';
import Pusher from 'pusher-js/react-native';

var pusher = new Pusher('4adf85492acfebaad8bb', {
  encrypted: true
});

var channel = pusher.subscribe('my-channel');
channel.bind('my-event', function(data) {
  alert(data.message);
});


class MainView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: 'useless placeholder'
    }
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
      return (
        <View style={styles.container}>
          <TextInput 
            style={styles.messageInput}
            placeholder="Type your message"
            onChangeText={(text) => this.setState({text})}
            value={this.state.messages}
            />
          <TouchableHighlight
            style={styles.button}
            underlayColor="transparent"
            onPress={this.props.onName}>
            <Text>SEND</Text>
          </TouchableHighlight>    
        </View>
      );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#f9f9f9",
    top:40
   },
   button: {
    top:100
   },
   description: {
    top: 110,
    right: 135
   },
   header: {
    top: 100
   },
  messageInput: {
    color: '#fff',
    height: 40,
    margin: 10,
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#909090',
    borderRadius: 6,
    color: '#48BBEC',
    textAlign: 'left',
    top: 100
  }
})

export default MainView;