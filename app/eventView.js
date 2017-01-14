'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Login from './fblogin';
import EventListings from './eventlistings';


class EventView extends Component {

  render() {
  var eventDetails = this.props.eventdata
  var today = new Date();


  /* LOGIC GOES HERE FOR LINK TO FORUM IF THE EVENT DATE IS CURRENT */

  /*if (eventDetails.dates.start === today) {
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
          <View style={styles.need}>
            <Image source={require('.././assets/need.png')}/>
            <Text style={styles.buttontext}> Need</Text>
          </View>
          <View style={styles.trade}>
            <Image  source={require('.././assets/trade.png')}/>
          <Text style={styles.buttontext}>Trade</Text>
          </View>
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
  buttontext: {
    color: '#505050', 
    fontFamily:'helvetica', 
    fontWeight: '400'
  },
  trade: {
    bottom: 15,
    left: 240
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
    fontSize: 22,
    margin: 5,
    color: '#585858',
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
  },
  forumbutton: {
    color: 'green',
    textAlign: 'center'
  }
});

export default EventView;