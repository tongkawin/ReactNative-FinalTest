import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';

class Staff extends Component {
  state = {
    data: [],
  };
  fetchData = async () => {
    const response = await fetch('http://172.16.156.149:3000/staff');
    const testTable = await response.json();
    this.setState({data: testTable});
  };
  componentWillMount() {
    this.fetchData();
  }
  constructor() {
    super();
    this.state = {
      SID: '',
      SName: '',
      STelephone: '',
      SPhoto: '',
    };
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Text style={{margin: 10, fontSize: 26, fontWeight: 'bold'}}>
            Profile Staff
          </Text>
          <ScrollView>
            <View style={{padding: 10}}>
              <FlatList
                data={this.state.data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                  <ScrollView>
                    <View
                      style={{
                        backgroundColor: '#33CC66',
                        padding: 10,
                        margin: 10,
                        borderRadius: 10,
                      }}>
                      <Text style={{color: '#fff', fontWeight: 'bold'}}>
                        <Text style={{color: '#000000'}}>
                          Staff ID: {item.SID}
                        </Text>
                      </Text>
                      <Text style={{color: '#fff', fontWeight: 'bold'}}>
                        <Text style={{color: '#000000'}}>
                          Name: {item.SName}
                        </Text>
                      </Text>
                      <Text style={{color: '#fff', fontWeight: 'bold'}}>
                        <Text style={{color: '#000000'}}>
                          Telephone: {item.STelephone}
                        </Text>
                      </Text>
                      <Text style={{color: '#fff', fontWeight: 'bold'}}>
                        <Text style={{color: '#000000'}}>
                          Photo: {item.SPhoto}
                        </Text>
                      </Text>
                      <Image
                        source={require('D:/Final/StaffsPhoto/7504.jpg')}
                        style={styles.size}
                      />
                    </View>
                  </ScrollView>
                )}
              />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
export default Staff;

const styles = StyleSheet.create({
  container: {
    marginLeft: 200,
  },
  size: {
    width: 98,
    height: 98,
    position: 'absolute',
    marginLeft: 280,
    borderRadius: 15,
  },
});
