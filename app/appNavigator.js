import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  Navigator,
  View
} from 'react-native';
import Search from './search';
import Result from './result';
import EventView from './eventView';
import Profile from './profile';
import Chat from './chat';
import LiteMapView from './mapView';
import EventListings from './eventlistings';

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    if (route.title === 'Search') {
      return null;
    } else if (route.title === 'Event') {
        return (
        <TouchableHighlight 
        style={styles.leftNavButton}
          onPress={() => navigator.push({
              title: 'Map'
            })
          }>
          <View>
          <Image style={{left: 10}} source={require('.././assets/map.png')}/>
        </View>
        </TouchableHighlight>
    )} else if (route.title === 'Profile') {
      return (
        <TouchableHighlight 
          style={styles.leftNavButton}
            onPress={() => navigator.push({
                title: 'Search'
              })
            }>
            <View>
            <Image source={require('.././assets/back.png')}/>
          </View>
        </TouchableHighlight>    
    )} else if (route.title === 'Map') {
      return (
        <TouchableHighlight 
          style={styles.leftNavButton}
            onPress={() => navigator.push({
                title: 'EventListings'
              })
            }>
            <View>
            <Image source={require('.././assets/eventlisting.png')}/>
          </View>
        </TouchableHighlight>
    )} else if (route.title === 'EventListings') {
      return (
        <TouchableHighlight 
          style={styles.leftNavButton}
            onPress={() => navigator.push({
                title: 'Map'
              })
            }>
            <View>
            <Image source={require('.././assets/map.png')}/>
          </View>
        </TouchableHighlight>
    )} 
  },
  Title(route, navigator, index, navState) {
    if (route.title === 'Event') {
      return (        
        <TouchableHighlight 
          style={styles.leftNavButton}
            onPress={() => navigator.push({
                title: 'Search'
              })
            }>
          <View>
            <Text style={styles.brandLink}>TRADER</Text>
          </View>
        </TouchableHighlight>
      );
    } else if (route.title === 'Map') {
      return (        
        <TouchableHighlight 
          style={styles.leftNavButton}
            onPress={() => navigator.push({
                title: 'Search'
              })
            }>
          <View>
            <Text style={styles.brandLink}>TRADER</Text>
          </View>
        </TouchableHighlight>
      );
    } else {
      return (
            <Text style={styles.brand}>TRADER</Text>        
      )
    }
  },
  RightButton(route, navigator, index, navState) {
    if (route.title === 'Profile') {
      return (
        <TouchableHighlight 
          style={styles.rightNavButton}
          onPress={() => { navigator.push({
              title: 'Chat',
            })
          }}>
          <View>
          <Image source={require('.././assets/chat.png')}/>
        </View>
        </TouchableHighlight>        
      );
    } else {
      return (
        <TouchableHighlight 
          style={styles.rightUserNavButton}
          onPress={() => { navigator.push({
              title: 'Profile',
            })
          }}>
          <View>
          <Image source={require('.././assets/user.png')}/>
        </View>
        </TouchableHighlight>
      );
    }
  },
}


class AppNavigator extends Component {
  renderScene(route, navigator) {
    if (route.title === 'Search') {
        return (
          <Search
            navigator={navigator} />  
        )
    } else if (route.title === 'Result') {
        return (
          <Result
            navigator={navigator} 
            data = {route.data} />
        )
    } else if (route.title === 'Event') {
        return (
          <EventView
            navigator={navigator} 
            eventdata = {route.event} />        
        )    
    } else if (route.title === 'EventListings') {
        return (
          <EventListings
            navigator={navigator} 
            eventdata = {route.event} />        
      )
    } else if (route.title === 'Profile') {
        return (
          <Profile
            navigator={navigator} />
        )
    } else if (route.title === 'Chat') {
        return (
          <Chat
            navigator={navigator} />
      )    
    } else if (route.title === 'Map') {
        return (
          <LiteMapView
            navigator={navigator} />
      )
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={this.props.initialRoute}
        renderScene={this.renderScene}
        configureScene={(route) => Navigator.SceneConfigs.FloatFromRight } 
        navigationBar={
          <Navigator.NavigationBar
            style={ styles.nav }
            routeMapper={NavigationBarRouteMapper}
          />
        }
      />        
    )
  }

}

const styles = StyleSheet.create({
  mainContainer: {
      flex: 4,
      flexDirection: 'column',
      marginTop:100
    },
    leftNavButton: {
      marginLeft:10,
      top:10,
      right: 7
    },
    rightNavButton: {
      marginRight:10,
      top:8,
      opacity: .5
    },    
    rightUserNavButton: {
      marginRight:10,
      top:11,
      opacity: .5
    },
    brand: {
      fontSize: 30,
      fontFamily: 'helvetica neue',
      letterSpacing: 2,
      color: '#7E8F7C',
      backgroundColor: 'transparent',
      top: 5
    },    
    brandLink: {
      fontSize: 30,
      fontFamily: 'helvetica neue',
      letterSpacing: 2,
      color: '#7E8F7C',
      bottom: 4
    },
    nav: {
      height: 60,
      backgroundColor: '#DFE2DB',
    },
    button: {
      height:60,
      margin: 10,
      backgroundColor: '#efefef',
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonText: {
      fontSize:18
    },
    image: {
      top: -2
    },
});

module.exports = AppNavigator;
