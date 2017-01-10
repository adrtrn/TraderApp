import React, { Component } from 'react';
import {StyleSheet, ActivityIndicator, Text, View, TouchableOpacity} from 'react-native';
import OAuthSimple from 'oauthsimple'

class Search extends Component {
  state = {
    position: 'unknown'
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({position});
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }

  fetchData() {
    var lat = this.state.position.coords.latitude
    var lng = this.state.position.coords.longitude
    var latlng = "ll=" + String(lat) + "," + String(lng)
    var consumerKey = "0ppYSN2T11ePY4JP7L85hJWm56mLeSIa"
    var consumerSecret = "TQGz4SsrAGovBavx"

    oauth = new OAuthSimple(consumerKey)
    request = oauth.sign({
      action: "GET",
      path: "https://app.ticketmaster.com/discovery/v2/events.json?",
      parameters: {classificationName: 'music', dmaId: '324'}, 
      signatures: {api_key: consumerKey, shared_secret: consumerSecret},
    })

    var nav = this.props.navigator

    fetch('https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=0ppYSN2T11ePY4JP7L85hJWm56mLeSIa').then(function(response){
      return response.json()
    }).then(function(data){
      nav.push({
        ident: "Result",
        data: data,
      })
    }).catch(function(error){
      console.log("Error:", error)
    })
  }

  render() {
    var spinnerAnimation = <ActivityIndicator
                              animating={this.state.isLoading}
                              color='black'
                              size='large' style={styles.spinner}>
                            </ActivityIndicator>
    var showSpinner = (this.state.isLoading ? spinnerAnimation : console.log('Fail'))    

    return (
      <View style={styles.container}>

        <Text style={styles.welcome}>
          TRADER
        </Text>
        {showSpinner}
        <TouchableOpacity
          style={{borderRadius: 7,padding: 10, backgroundColor: '#CBE32D'}}
          onPress={this.fetchData.bind(this)}>
          <Text style={{fontSize: 16, color: '#fff'}}>GO</Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 40,
    fontFamily: 'helvetica',
    fontWeight: '200',
    textAlign: 'center',
    margin: 10,
    marginBottom: 50,
    color: '#303030'
  },
  spinner: {
    height: 20,
  }
});

module.exports = Search;
