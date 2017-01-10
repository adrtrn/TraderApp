import React, { Component } from 'react';
import { Navigator } from 'react-native';
import Search from './search';
import Result from './result';

class AppNavigator extends Component {

  renderScene(route, navigator) {
    var globalNavProps = { navigator }

    switch(route.ident) {
      case 'Search':
        return (
          <Search
            {...globalNavProps} />  
        )

      case 'Result':
        return (
          <Result
            {...globalNavProps} 
            data = {route.data} />
        )
    }
  }

  render() {
    return (
      <Navigator 
        initialRoute={this.props.initialRoute}
        renderScene={this.renderScene}
        configureScene={(route) => Navigator.SceneConfigs.FloatFromRight } />
    )
  }

}

module.exports = AppNavigator;
