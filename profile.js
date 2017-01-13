import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Userlist from './userlist';

class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.userimage} source={require('./assets/cat.jpeg')}/>
        <Text style={styles.username}>
          Grumpy Cat
        </Text>
        <View style={styles.chat}>
          <Text style={styles.post}>
            RECENT POSTS
          </Text>
          <Userlist/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#7E8F7C',
    top: 60
  },

  chat: {
    flex: 2, 
    width: 400, 
    backgroundColor: '#b5a397',
    flexDirection: 'column',
    top: 20

  },
  username: {
    fontSize: 22,
    fontWeight: '400',
    textAlign: 'center',
    color: '#fff',
    top: 10
  },
  userimage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    top: 10
  },
  post: {
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
    color: '#656565'
    },
    
});

export default Profile;