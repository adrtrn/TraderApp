'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Login from './loginForm';
import EventListings from './eventlistings';


class EventView extends Component {

  render() {
  let eventDetails = this.props.eventdata


  /* /////// LOGIC GOES HERE FOR LINK TO FORUM IF THE EVENT DATE IS CURRENT 
  let today = new Date();

  if (eventDetails.dates.start === today) {
    return button;
  } else {
    return "The event hasn't started or is already over.";
  }

  */
    return (
      <View style={styles.container}>
        <Image style={styles.image}
            source={{uri: eventDetails.images[3].url}} /> 
        <Text style={styles.description}>{eventDetails.name}</Text>
        <View style={{flexDirection: 'row'}}> 
          <TouchableOpacity
            style={styles.addpost}>
            <Image
              style={styles.createicon}
              source={require('.././assets/add.png')}
            />            
          </TouchableOpacity>
          <Text style={styles.buttontext}> CREATE </Text>
          <TouchableOpacity
            style={styles.listall}>
             <Image
            style={styles.search}
            source={require('.././assets/listall.png')}
          />                     
          </TouchableOpacity>
          <Text style={styles.showtext}> SHOW ALL </Text>
        </View>        
        <EventListings/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFE2DB'
  },
  need: {
    bottom: 15,
    left: 50,
  },
  createicon: {
    top: 10,
    left: 3,
    opacity: .6
  },
  buttontext: {
    textAlign: 'center',
    top: 15,
    right: 3,
    color: '#686868', 
    fontFamily:'helvetica', 
    fontWeight: '400'
  },
  trade: {
    bottom: 15,
    left: 240
  },
  listall: {
    top: 2,
    left: 200,
    margin: 10
  },
  addpost: {
    top: 3,
    left: 90
  },
  image: {
    width: 380,
    height: 300,
    opacity: 0.6
  },
  title: {
    fontSize: 14,
    margin: 5,
    color: '#656565',
  },
  date: {
    fontSize: 12,
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Helvetica',
  },
  description: {
    backgroundColor: 'transparent',
    fontSize: 20,
    margin: 3,
    color: '#585858',
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
  },
  showtext: {
    left: 70,
    top: 10,
    color: '#686868', 
    fontFamily:'helvetica', 
    fontWeight: '400'  
  },
  forumbutton: {
    color: 'green',
    textAlign: 'center'
  }
});

export default EventView;