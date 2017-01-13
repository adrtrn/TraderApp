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

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    if (route.title === 'Search') {
      return null;
    } else if (route.title === 'Profile'){
      return (
        <TouchableHighlight 
        style={styles.leftNavButton}
          onPress={() => navigator.push({
              title: 'Search'
            })
          }>
          <View>
          <Image source={require('./assets/back.png')}/>
        </View>
        </TouchableHighlight>
    )} else {
      return (
        <TouchableHighlight 
          style={styles.rightNavButton}
          onPress={() => { navigator.push({
              title: 'Search',
            })
          }}>
          <View>
          <Image source={require('./assets/back.png')}/>
        </View>
        </TouchableHighlight>
    )} 
  },
  Title(route, navigator, index, navState) {
      return (
          <Text style={styles.brand}>TRADER</Text>
      );
    
  },
  RightButton(route, navigator, index, navState) {
    if (route.title === 'Profile') {
      return null;
    } else {
      return (
        <TouchableHighlight 
          style={styles.rightNavButton}
          onPress={() => { navigator.push({
              title: 'Profile',
            })
          }}>
          <View>
          <Image source={require('./assets/user.png')}/>
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
    } else if (route.title === 'Profile') {
        return (
          <Profile
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
      marginLeft:13,
      top:7
    },
    rightNavButton: {
      marginRight:10,
      top:7
    },
    brand: {
      fontSize: 30,
      fontFamily: 'helvetica neue',
      letterSpacing: 2,
      color: '#F2EFE4'
    },
    nav: {
      height: 60,
      backgroundColor: '#7E8F7C',
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
