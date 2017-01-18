import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

class WelcomeView extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: null
    };
  }
  render() {
    let username = this.props.username;

    if (username) {
      return (
        <View>
          <Text style={styles.header}> Welcome {username} </Text> 
        </View>
      )
    } else {
        return (
          <View style={styles.container}>
            <Text style={styles.header}> PLEASE SIGN UP OR LOGIN </Text>
            <Text style={styles.description}> USERNAME: </Text>
            <TextInput
              style={styles.loginInput}
              onChangeText={(username) => this.props.onName} 
              value={username}
              placeholder="Please enter your username"/>            
            <TouchableHighlight
              style={styles.button}
              underlayColor="transparent"
              onPress={this.props.onName}>
              <Text>CREATE ACCOUNT</Text>
            </TouchableHighlight>        
          </View>



        )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#f9f9f9",
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
  loginInput: {
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

export default WelcomeView;