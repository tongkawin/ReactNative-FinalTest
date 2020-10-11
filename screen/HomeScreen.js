import React, {Component} from 'react';
import {StyleSheet, View, SafeAreaView, Text} from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import Gallery from 'react-native-image-gallery';
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 12,
    margin: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            height: 300,
            borderBottomWidth: 5,
            borderBottomColor: '#006633',
          }}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
              latitude: 8.4303,
              longitude: 99.9631,
              latitudeDelta: 0.515,
              longitudeDelta: 0.5121,
            }}>
            <Marker
              coordinate={{
                latitude: 8.644799,
                longitude: 99.896647,
              }}>
              <Callout>
                <Text>Forrest Event</Text>
              </Callout>
            </Marker>
            <Marker
              coordinate={{
                latitude: 8.645519,
                longitude: 99.735986,
              }}>
              <Callout>
                <Text>Forrest Event</Text>
              </Callout>
            </Marker>
            <Marker
              coordinate={{
                latitude: 8.411264,
                longitude: 99.877456,
              }}>
              <Callout>
                <Text>Forrest Event</Text>
              </Callout>
            </Marker>
            <Marker
              coordinate={{
                latitude: 8.645519,
                longitude: 99.639785,
              }}>
              <Callout>
                <Text>Forrest Event</Text>
              </Callout>
            </Marker>
            <Marker
              coordinate={{
                latitude: 8.865687,
                longitude: 99.785288,
              }}>
              <Callout>
                <Text>Forrest Event</Text>
              </Callout>
            </Marker>
            <Marker
              coordinate={{
                latitude: 8.456883,
                longitude: 99.658988,
              }}>
              <Callout>
                <Text>Forrest Event</Text>
              </Callout>
            </Marker>
            <Marker
              coordinate={{
                latitude: 8.897585,
                longitude: 99.753699,
              }}>
              <Callout>
                <Text>Forrest Event</Text>
              </Callout>
            </Marker>
            <Marker
              coordinate={{
                latitude: 8.568771,
                longitude: 99.725355,
              }}>
              <Callout>
                <Text>Forrest Event</Text>
              </Callout>
            </Marker>
            <Marker
              coordinate={{
                latitude: 8.785567,
                longitude: 99.753985,
              }}>
              <Callout>
                <Text>Forrest Event</Text>
              </Callout>
            </Marker>
            <Marker
              coordinate={{
                latitude: 8.785633,
                longitude: 99.828569,
              }}>
              <Callout>
                <Text>Forrest Event</Text>
              </Callout>
            </Marker>
            <Marker
              coordinate={{
                latitude: 8.867657,
                longitude: 99.742539,
              }}>
              <Callout>
                <Text>Forrest Event</Text>
              </Callout>
            </Marker>
            <Marker
              coordinate={{
                latitude: 8.8765787,
                longitude: 99.737589,
              }}>
              <Callout>
                <Text>Forrest Event</Text>
              </Callout>
            </Marker>
            <Marker
              coordinate={{
                latitude: 8.7545865,
                longitude: 99.777896,
              }}>
              <Callout>
                <Text>Forrest Event</Text>
              </Callout>
            </Marker>
            <Marker
              coordinate={{
                latitude: 8.4562238,
                longitude: 99.852399,
              }}>
              <Callout>
                <Text>Forrest Event</Text>
              </Callout>
            </Marker>
            <Marker
              coordinate={{
                latitude: 8.785625,
                longitude: 99.56899,
              }}>
              <Callout>
                <Text>Forrest Event</Text>
              </Callout>
            </Marker>
            <Marker
              coordinate={{
                latitude: 8.123555,
                longitude: 99.753222,
              }}>
              <Callout>
                <Text>Forrest Event</Text>
              </Callout>
            </Marker>
            <Marker
              coordinate={{
                latitude: 8.41414769,
                longitude: 99.752889,
              }}>
              <Callout>
                <Text>Forrest Event</Text>
              </Callout>
            </Marker>
            <Marker
              coordinate={{
                latitude: 8.753698,
                longitude: 99.897381,
              }}>
              <Callout>
                <Text>Forrest Event</Text>
              </Callout>
            </Marker>
            <Marker
              coordinate={{
                latitude: 8.123005,
                longitude: 99.844625,
              }}>
              <Callout>
                <Text>Forrest Event</Text>
              </Callout>
            </Marker>
            <Marker
              coordinate={{
                latitude: 8.100457,
                longitude: 99.754123,
              }}>
              <Callout>
                <Text>Forrest Event</Text>
              </Callout>
            </Marker>
            <Marker
              coordinate={{
                latitude: 8.425387,
                longitude: 99.897381,
              }}>
              <Callout>
                <Text>Forrest Event</Text>
              </Callout>
            </Marker>
            <Marker
              coordinate={{
                latitude: 8.645519,
                longitude: 99.742135,
              }}>
              <Callout>
                <Text>Forrest Event</Text>
              </Callout>
            </Marker>
          </MapView>
        </View>
        <Gallery
          style={{flex: 1, backgroundColor: '#fff'}}
          images={[
            {
              source: require('D:/Final/StaffsPhoto/111.jpg'),
              dimensions: {width: 75, height: 75},
            },
            {
              source: require('D:/Final/StaffsPhoto/222.jpg'),
              dimensions: {width: 75, height: 75},
            },
            {
              source: require('D:/Final/StaffsPhoto/333.jpg'),
              dimensions: {width: 75, height: 75},
            },
            {
              source: require('D:/Final/StaffsPhoto/444.jpg'),
              dimensions: {width: 75, height: 75},
            },
            {
              source: require('D:/Final/StaffsPhoto/555.jpg'),
              dimensions: {width: 75, height: 75},
            },
            {
              source: require('D:/Final/StaffsPhoto/666.jpg'),
              dimensions: {width: 75, height: 75},
            },
            {
              source: require('D:/Final/StaffsPhoto/777.jpg'),
              dimensions: {width: 75, height: 75},
            },
          ]}
        />
      </SafeAreaView>
    );
  }
}
export default HomeScreen;
