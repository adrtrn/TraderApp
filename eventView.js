'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

class EventView extends Component {

  render() {
  var eventDetails = this.props.eventdata

  if (eventDetails.dates.start)



    return (
      <View style={styles.container}>
        <Image style={styles.image}
            source={{uri: eventDetails.images[3].url}} /> 
        <Text style={styles.description}>{eventDetails.name}</Text>
        <Text style={styles.description}>{eventDetails.dates.start.dateTime.slice(5,-10).replace(/-/,'/')}</Text>


      <TouchableOpacity>
        <Text style={styles.forumbutton}> SHOW POSTS </Text>
      </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  image: {
    width: 380,
    height: 300
  },
  title: {
    fontSize: 14,
    margin: 5,
    color: '#656565',

  },
  description: {
    fontSize: 18,
    margin: 5,
    color: '#656565',
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontWeight: '400'  
  },
  forumbutton: {
    color: 'green',
    textAlign: 'center'
  }
});

export default EventView;