import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, RefreshControl, ActivityIndicator, ListView, Linking, TouchableOpacity} from 'react-native';
import EventView from './eventView';


class Result extends Component {

  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.url != r2.url})
    this.state = {
      results: ds.cloneWithRows(props.data['_embedded']['events'].map(function(x){ return x; })),
    }
  }

  rowPressed(eventURL) {
    var event = this.props.data['_embedded']['events'].map(function(x){ return x; }).filter(prop => prop.url === eventURL)[0];

    this.props.navigator.push({
      title: "Event",
      component: EventView,
      event: event
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          style={styles.list}
          dataSource={this.state.results}
          renderRow={(result) => { return this.renderResult(result) }} 
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}/>
      </View>
    );
  }

  renderResult(result) {
    return (
      <TouchableOpacity onPress={() => this.rowPressed(result.url)}
        style={styles.resultRow}>
        <View style={{flexDirection: 'column', flex: 1, justifyContent: 'space-between', marginTop: 4,}}>
          <Image 
            style={styles.thumb}
            source={{ uri: result.images[2]['url'] }}
          />
          <Text style={styles.title}> {result.name} </Text>
          <Text style={styles.description}> {result.dates.start.dateTime.slice(5,-10).replace(/-/,'/')} </Text>
          <Text style={styles.description}>  {result._embedded.venues[0].name}, {result._embedded.venues[0].city.name} 
          </Text>
       </View>

      </TouchableOpacity>
    )
  }

}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    padding: 7,
    justifyContent: 'center',
    alignItems: 'center',  
  },  
  header:{
    textAlign: 'center',
    top: 26,
    fontSize: 26,
    fontWeight: '200',
    backgroundColor: '#A8CD1B',
    color: '#fff'
  },
  container: {
    flex: 1,
    backgroundColor: '#F2EFE4'
  },
  list: {
    marginTop: 20
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#e4e4e4',
  },
  resultRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',  
    marginTop: 10
  },
  title: {
    justifyContent: 'flex-end',    
    fontSize: 16,
    textAlign: 'center',
    color: '#303030'
  },
  description: {
    textAlign: 'center',
    fontSize: 12,
    color: '#808080'
  },
  thumb: {
    opacity: 0.8,
    width: 300,
    height: 150,
    borderRadius: 17,
    marginLeft: 30
  },  
});

export default Result;