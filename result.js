import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, RefreshControl, ActivityIndicator, ListView, Linking, TouchableOpacity} from 'react-native';

class Result extends Component {

  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    this.state = {
      results: ds.cloneWithRows(props.data['_embedded']['events'].map(function(x){ return x; })),
    }
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <TouchableHighlight onPress={() => this.rowPressed(rowData.url)}
          underlayColor='#dddddd'>
        <View>
          <View style={styles.rowContainer}>
            <View  style={styles.textContainer}>
              <Text style={styles.title}
                    numberOfLines={1}>{rowData.title}</Text>
            </View>
          </View>
          <View style={styles.separator}/>
        </View>
      </TouchableHighlight>
    );
  }  

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Trader</Text>
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
      <TouchableOpacity style={styles.resultRow}>
        <View style={{flexDirection: 'column', flex: 1, justifyContent: 'space-between', marginTop: 4,}}>
          <Image 
            style={styles.thumb}
            source={{ uri: result.images[2]['url'] }}
          />
          <Text style={styles.title}> {result.name} </Text>
          <Text style={styles.description}> {result.dates.start.dateTime.slice(5,-10).replace(/-/,'/')} </Text>
          <Text style={styles.description}> @ {result._embedded.venues[0].name}, {result._embedded.venues[0].city.name} 
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
    width: 150,
    height: 150,
    borderRadius: 17,
    marginLeft: 120
  },  
});

module.exports = Result
