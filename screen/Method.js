import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

class Staff extends Component {
  state = {
    data: [],
  };
  fetchData = async () => {
    const response = await fetch('http://172.16.156.149:3002/booking');
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
      GTour: '',
      BTour: '',
      Lunch: '',
      Dinner: '',
      Date: '',
      CName: '',
    };
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View
            style={{
              height: 280,
              padding: 10,
            }}>
            <Text style={{margin: 10, fontSize: 26, fontWeight: 'bold'}}>
              All Booking
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
                        Cus Name: {item.GTour}
                      </Text>
                    </Text>
                    <Text style={{color: '#fff', fontWeight: 'bold'}}>
                      <Text style={{color: '#000000'}}>
                        Telephone: {item.BTour}
                      </Text>
                    </Text>
                    <Text style={{color: '#fff', fontWeight: 'bold'}}>
                      <Text style={{color: '#000000'}}>
                        Lunch: {item.Lunch}
                      </Text>
                    </Text>
                    <Text style={{color: '#fff', fontWeight: 'bold'}}>
                      <Text style={{color: '#000000'}}>
                        Dinder: {item.Dinner}
                      </Text>
                    </Text>
                    <Text style={{color: '#fff', fontWeight: 'bold'}}>
                      <Text style={{color: '#000000'}}>Date: {item.Date}</Text>
                    </Text>
                    <Text style={{color: '#fff', fontWeight: 'bold'}}>
                      <Text style={{color: '#000000'}}>Name: {item.CName}</Text>
                    </Text>
                  </View>
                </ScrollView>
              )}
            />
          </View>
          <ScrollView>
            <View style={{margin: 25}}>
              <Text style={{fontSize: 24, padding: 12}}>Booking per Month</Text>
              <LineChart
                data={{
                  labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                  ],
                  datasets: [
                    {
                      data: [
                        Math.random() * 10,
                        Math.random() * 10,
                        Math.random() * 10,
                        Math.random() * 10,
                        Math.random() * 10,
                        Math.random() * 10,
                      ],
                    },
                  ],
                }}
                width={Dimensions.get('window').width - 50} // from react-native
                height={220}
                yAxisLabel="P:"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                  backgroundColor: '#e26a00',
                  backgroundGradientFrom: '#fb8c00',
                  backgroundGradientTo: '#ffa726',
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) =>
                    `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16,
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                  propsForDots: {
                    r: '6',
                    strokeWidth: '2',
                    stroke: '#000',
                  },
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
              />
              <Text style={{fontSize: 24, padding: 12}}>Booking per Year</Text>
              <LineChart
                data={{
                  labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
                  datasets: [
                    {
                      data: [
                        Math.random() * 10,
                        Math.random() * 10,
                        Math.random() * 10,
                        Math.random() * 10,
                        Math.random() * 10,
                        Math.random() * 10,
                      ],
                    },
                  ],
                }}
                width={Dimensions.get('window').width - 50} // from react-native
                height={220}
                yAxisLabel="P:"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                  backgroundColor: '#e26a00',
                  backgroundGradientFrom: '#fb8c00',
                  backgroundGradientTo: '#ffa726',
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) =>
                    `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16,
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                  propsForDots: {
                    r: '6',
                    strokeWidth: '2',
                    stroke: 'red',
                  },
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  size: {
    width: 200,
    height: 200,
  },
});
