import React, { Component } from 'react';
import {StyleSheet, ActivityIndicator, Text, View, Image, TextInput, TouchableHighlight} from 'react-native';
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

    fetch('https://app.ticketmaster.com/discovery/v2/events.json?'+today+'&keyword='+this.state.searchString+'&apikey=0ppYSN2T11ePY4JP7L85hJWm56mLeSIa').then(function(response){
      return response.json()
    }).then(function(data){
      nav.push({
        title: "Result",
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
        <Image source={require('.././assets/sand.jpeg')} style={styles.backgroundImage} />
        <TextInput
          style={styles.searchInput}
          value={this.state.searchString}
          onChange={this.onSearchTextChanged.bind(this)}
          placeholder='Search by Event Name or Location'/>
          {spinner}
        <TouchableHighlight
          style={styles.button}
          underlayColor="transparent"
          onPress={this.fetchData.bind(this)}>
          <Image
            style={styles.search}
            source={require('.././assets/search.png')}
    
          />
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
  backgroundImage: {
    resizeMode: 'cover', // or 'stretch'
  },
    button: {
    flexDirection: 'row',
    borderRadius: 7,
    padding: 5, 
    backgroundColor: 'transparent',
    alignItems: 'center',
    marginBottom: 150,
    left: 150,
    bottom: 796,
    right: 3,
  },
  search: {
    opacity: 0.4,
    backgroundColor: 'transparent',
  },
  welcome: {
    fontSize: 40,
    fontFamily: 'helvetica neue',
    letterSpacing: 2,
    fontWeight: '400',
    textAlign: 'center',
    margin: 10,
    color: '#7E8F7C'
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
    borderWidth: .8,
    borderColor: '#909090',
    borderRadius: 6,
    color: '#48BBEC',
    textAlign: 'left',
    bottom: 750

}
});

export default Search;