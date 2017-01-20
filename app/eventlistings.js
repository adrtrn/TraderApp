import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image, RefreshControl, ActivityIndicator, ListView, Linking, TouchableOpacity} from 'react-native';


var meow = ['item: 1','item: 2','item: 3','item: 4','item: 5','item: 6',]


class EventListings extends Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    this.state = {
      eventlisting: ds.cloneWithRows(meow),
      searchText: ''
    }
  }
  setSearchText(event) {
    const searchText = event.nativeEvent.text;
    let postLength = this.state.meow.length;

    this.setState({
      searchText,
      eventlisting: this.state.dataSource.cloneWithRows(filteredPost)
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.searchBar}
          placeholder="  Search..."
          onChangeText={(text) => console.log('searching for ', text)}
        />      
        <ListView
          style={styles.list}
          dataSource={this.state.eventlisting}
          renderRow={(result) => { return this.renderResult(result) }} 
          renderHeader={() => {Header}}
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

const Header = (props) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder="Search..."
      onChangeText={(text) => console.log('searching for ', text)}
    />
  </View>
);

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
  searchBar: {
    fontSize: 18,
    height: 10,
    flex: .2,
    borderWidth: 1,
  },
});

export default EventListings;