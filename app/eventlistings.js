import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, RefreshControl, ActivityIndicator, ListView, Linking, TouchableOpacity} from 'react-native';


var sampledata = ['HAVE: ITEM #5','NEED: ITEM #31','NEED: ITEM #52','HAVE: ITEM #32','HAVE: ITEM #45','NEED: ITEM #15','NEED: ITEM #12','NEED: ITEM #22','HAVE: ITEM #31','HAVE: ITEM #14','NEED: ITEM #55',]


class EventListings extends Component {


  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    this.state = {
      userposts: ds.cloneWithRows(sampledata)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}> RECENT POSTS </Text>
        <ListView
          style={styles.list}
          dataSource={this.state.userposts}
          renderRow={(result) => { return this.renderResult(result) }} 
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}/>
      </View>
    );
  }

  renderResult(result) {
    return (
      <TouchableOpacity onPress={() => this.rowPressed(result)}
        style={styles.resultRow}>
        <View style={{flexDirection: 'column', flex: 1, justifyContent: 'space-between', marginTop: 4,}}>
          <Text style={styles.title}> {result} </Text>
       </View>
      </TouchableOpacity>
    )
  }  
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',  
    bottom: 50
  },  
  header:{
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '200',
    backgroundColor: '#F2EFE4',
    color: '#303030'
  },
  container: {
    flex: 2,
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
    marginTop: 10,
    marginBottom: 10
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

export default EventListings;