import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import Userlistings from './userlist';
import Chat from './chat'


class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.userimage} source={require('.././assets/cat.jpeg')}/>
        <Text style={styles.username}>
          Grumpy Cat 
        </Text>
        <View style={styles.features}>
        <TouchableHighlight 
          style={styles.leftbutton}>
          <View>
          <Image style={{opacity: 0.5}}source={require('.././assets/list.png')}/>
          <Text style={styles.featurestext}> 0 posts </Text>
        </View>
        </TouchableHighlight>            
        <TouchableHighlight
          style={styles.centerbutton}>
          <View>
          <Image source={require('.././assets/tradeheart.png')}/>
          <Text style={styles.featurestext}> 0 trades </Text>
        </View>
        </TouchableHighlight>            
        <TouchableHighlight
          style={styles.rightbutton}>
          <View>
          <Image source={require('.././assets/block.png')}/>
        </View>
        </TouchableHighlight>    
        </View>

        <View style={styles.chat}>
          <Text style={styles.post}>
            RECENT POSTS
          </Text>
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
    backgroundColor: '#DFE2DB',
    top: 60
  },
  features: {
    flexDirection: 'row',
    margin: 20
  },
  leftbutton: {
    right: 60,
    top: 5,
  },
  centerbutton: {
    bottom: 14
  },
  featurestext: {
    textAlign: 'center',
    color: '#909090',
    bottom: 0
  },
  rightbutton: {
    left: 60
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
    color: '#585858',
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