import React, { Component } from 'react';
import { StyleSheet, Dimensions, View} from 'react-native';
import { Provider } from 'react-redux'
import WelcomeView from './welcomeView'
import MainView from './mainView'

import configureStore from '.././src/store/configureStore'
const store = configureStore();

import ConversationScreen from '.././src/screens/conversationscreen';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Grumpy Cat'
    }
  }

  _onName(e) {
    if (e.nativeEvent.keyCode != 13) return;
    var username = e.target.value;
    this.setState({username: username});
  }

  render() {
    return (
            <Provider store={store}>
            <ConversationScreen />
                </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
   },
   tabBarStyle: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#95a5a6",
    padding: 0,
    height: 45
    },
    sceneStyle: {
      flex: 1,
      backgroundColor: "#fff",
      flexDirection: "column",
    }
})

export default Chat;