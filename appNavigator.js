import React, { Component } from 'react';
import { Navigator } from 'react-native';

class AppNavigator extends Component {

  renderScene(route, navigator) {
    var globalNavProps = { navigator }

    switch(route.ident) {
      case 'Search':
        return (
          <Search
            {...globalNavProps} />  
        )

      case 'Results':
        return (
          <Result
            {...globalNavProps} 
            data = {route.data} />
        )
    }
  }

  render() {
    return {
      <Navigator 
        initialRoute={this.props.initialRoute}
        renderScene={this.renderScene}
        configureScene={(route) => Navigator.SceneConfigs.FloatFromRight } />
    }
  }

}

module.exports = AppNavigator
