import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  StyleSheet,
} from 'react-native';

class Staff extends Component {
  state = {
    data: [],
  };
  fetchData = async () => {
    const response = await fetch('http://172.16.156.149:3001/customer');
    const testTable = await response.json();
    this.setState({data: testTable});
  };
  componentWillMount() {
    this.fetchData();
  }
  constructor() {
    super();
    this.state = {
      CID: '',
      CName: '',
      CTelephone: '',
      CSex: '',
    };
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View
            style={{
              flex: 1,
              padding: 10,
            }}>
            <Text style={{margin: 10, fontSize: 26, fontWeight: 'bold'}}>
              ข้อมูลลูกค้าทุกท่าน
            </Text>
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
                        Staff ID: {item.CID}
                      </Text>
                    </Text>
                    <Text style={{color: '#fff', fontWeight: 'bold'}}>
                      <Text style={{color: '#000000'}}>
                        Cus Name: {item.CName}
                      </Text>
                    </Text>
                    <Text style={{color: '#fff', fontWeight: 'bold'}}>
                      <Text style={{color: '#000000'}}>
                        Telephone: {item.CTelephone}
                      </Text>
                    </Text>
                    <Text style={{color: '#fff', fontWeight: 'bold'}}>
                      <Text style={{color: '#000000'}}>Sex: {item.CSex}</Text>
                    </Text>
                  </View>
                </ScrollView>
              )}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
export default Staff;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  size: {
    width: 200,
    height: 200,
  },
});
