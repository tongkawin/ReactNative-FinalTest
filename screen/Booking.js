import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Staff extends Component {
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
              Booking Package
            </Text>
            <View
              style={{
                flexDirection: 'row',
                padding: 5,
                borderRadius: 15,
                backgroundColor: 'white',
                marginHorizontal: 10,
                shadowOffset: {width: 0, height: 0},
                shadowColor: 'black',
                shadowOpacity: 0.2,
                elevation: 1,
                marginTop: Platform.OS == 'android' ? 10 : null,
              }}>
              <Icon name="download" size={20} color="gray" />
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="ENTER YOUR NAME"
                placeholderTextColor="gray"
                style={{flex: 1, fontWeight: '700', backgroundColor: 'white'}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                padding: 5,
                borderRadius: 15,
                backgroundColor: 'white',
                marginHorizontal: 10,
                shadowOffset: {width: 0, height: 0},
                shadowColor: 'black',
                shadowOpacity: 0.2,
                elevation: 1,
                marginTop: Platform.OS == 'android' ? 10 : null,
              }}>
              <Icon name="download" size={20} color="gray" />
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="ENTER YOUR PACKAGE"
                placeholderTextColor="gray"
                style={{flex: 1, fontWeight: '700', backgroundColor: 'white'}}
              />
            </View>
            <View
              style={{
                marginTop: 20,
                borderRadius: 15,
                marginHorizontal: 10,
                shadowOffset: {width: 0, height: 0},
                shadowColor: 'black',
                shadowOpacity: 0.2,
                elevation: 1,
                marginTop: Platform.OS == 'android' ? 10 : null,
              }}>
              <Button
                borderRadius="15"
                title="Continus"
                color="#006633"
                accessibilityLabel="Learn more about this purple button"
              />
            </View>
          </View>
          <View
            style={{
              height: 280,
              padding: 10,
            }}>
            <Text style={{margin: 10, fontSize: 26, fontWeight: 'bold'}}>
              Edit Package
            </Text>

            <View
              style={{
                flexDirection: 'row',
                padding: 5,
                borderRadius: 15,
                backgroundColor: 'white',
                marginHorizontal: 10,
                shadowOffset: {width: 0, height: 0},
                shadowColor: 'black',
                shadowOpacity: 0.2,
                elevation: 1,
                marginTop: Platform.OS == 'android' ? 10 : null,
              }}>
              <Icon name="pencil" size={20} color="gray" />
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="ENTER YOUR NAME"
                placeholderTextColor="gray"
                style={{flex: 1, fontWeight: '700', backgroundColor: 'white'}}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                padding: 5,
                borderRadius: 15,
                backgroundColor: 'white',
                marginHorizontal: 10,
                shadowOffset: {width: 0, height: 0},
                shadowColor: 'black',
                shadowOpacity: 0.2,
                elevation: 1,
                marginTop: Platform.OS == 'android' ? 10 : null,
              }}>
              <Icon name="pencil" size={20} color="gray" />
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="ENTER YOUR PACKAGE"
                placeholderTextColor="gray"
                style={{flex: 1, fontWeight: '700', backgroundColor: 'white'}}
              />
            </View>
            <View
              style={{
                marginTop: 20,
                borderRadius: 15,
                marginHorizontal: 10,
                shadowOffset: {width: 0, height: 0},
                shadowColor: 'black',
                shadowOpacity: 0.2,
                elevation: 1,
                marginTop: Platform.OS == 'android' ? 10 : null,
              }}>
              <Button
                borderRadius="15"
                title="Continus"
                color="#006633"
                accessibilityLabel="Learn more about this purple button"
              />
            </View>
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
