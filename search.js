import React, { Component } from 'react';
import {StyleSheet, ActivityIndicator, Text, View, TextInput, TouchableHighlight} from 'react-native';
import OAuthSimple from 'oauthsimple'

class Search extends Component {
  state = {
    position: 'unknown',
    searchString: '',
    isLoading: false
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
    var latlong = "latlong=" + String(lat) + "," + String(lng)
    var consumerKey = "0ppYSN2T11ePY4JP7L85hJWm56mLeSIa"
    var consumerSecret = "TQGz4SsrAGovBavx"

    oauth = new OAuthSimple(consumerKey)
    request = oauth.sign({
      action: "GET",
      path: "https://app.ticketmaster.com/discovery/v2/events.json?",
      parameters: {classificationName: 'music', dmaId: '324', latlong: latlong}, 
      signatures: {api_key: consumerKey, shared_secret: consumerSecret},
    })

    var nav = this.props.navigator
    var dateFormat = require('dateformat');
    var now = new Date();
    var today = "startDateTime=" + dateFormat(now, "isoDateTime").slice(0, -5) + 'Z';

    fetch('https://app.ticketmaster.com/discovery/v2/events.json?'+today+'&keyword='+this.state.searchString+'&dmaId=324&apikey=0ppYSN2T11ePY4JP7L85hJWm56mLeSIa').then(function(response){
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

  onSearchTextChanged(event) {
    this.setState({ searchString: event.nativeEvent.text })
  }
  _executeQuery(query) {
    console.log(query);
    this.setState({ isLoading: true });
  }
  onSearchPressed() {
    var query = urlForQueryAndPage('place_name', this.state.searchString, 1);
    this._executeQuery(query);
  }
  render() {
    var spinner = this.state.isLoading ?
      ( <ActivityIndicator
          size='large'/> ) :
      ( <View/>);

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          TRADER
        </Text>
        <TextInput
          style={styles.searchInput}
          value={this.state.searchString}
          onChange={this.onSearchTextChanged.bind(this)}
          placeholder='Search by Event Name or Location'/>
          {spinner}
        <TouchableHighlight
          style={styles.button}
          onPress={this.fetchData.bind(this)}>
          <Text style={{fontSize: 16, color: '#fff'}}>SEARCH</Text>
        </TouchableHighlight>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2EFE4',

  },
  button: {
    flexDirection: 'row',
    borderRadius: 7,
    padding: 5, 
    backgroundColor: '#CBE32D',
    alignItems: 'center',
    marginBottom: 150,
  },
  welcome: {
    fontSize: 40,
    fontFamily: 'helvetica',
    fontWeight: '200',
    textAlign: 'center',
    margin: 10,
    color: '#303030'
  },
  spinner: {
    height: 20,
  },
  searchInput: {
    height: 40,
    padding: 4,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 10,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#909090',
    borderRadius: 8,
    color: '#48BBEC',
    textAlign: 'center',

}
});

module.exports = Search;
