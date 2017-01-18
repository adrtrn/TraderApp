import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity
} from 'react-native';


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: null
    }
  }

  _onName(e) {
    if (e.nativeEvent.keyCode != 13) return;
    var username = e.target.value;
    this.setState({username: username});
  }

  render() {
    return (
        <View style={styles.container}>
          <WelcomeView
            username={this.state.username}
            _onName={this._onName}/>
        </View>
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

export default Login;








































/*
const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken
} = FBSDK;

class Login extends Component {
    render() {
      return (
        <View>
          <LoginButton
            publishPermissions={["publish_actions"]}
            onLoginFinished={
              (error, result) => {
                if (error) {
                  alert("login has error: " + result.error);
                } else if (result.isCancelled) {
                  alert("login is cancelled.");
                } else {
                  AccessToken.getCurrentAccessToken().then(
                    (data) => {
                      alert(data.accessToken.toString())
                    }
                  )
                }
              }
            }
            onLogoutFinished={() => alert("logout.")}/>
        </View>
      );
    }
};

export default Login;

*/