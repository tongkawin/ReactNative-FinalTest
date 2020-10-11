import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
class Find extends Component {
  /*state = {
    data: [],
  };

  UserRegistrationFunction = () => {
    fetch('http://172.16.156.100:80/User_Project/user_registration.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        staff: this.state.CID,
      }),
    })
      .then((response) => response.text())
      .then((responseJson) => {
        Alert.alert(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };*/

  render() {
    return (
      <View>
        <Text style={{margin: 10, fontSize: 26, fontWeight: 'bold'}}>
          Search Staff
        </Text>
        <View
          style={{
            marginTop: 16,
            marginBottom: 16,
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}>
          <Icon name="search" size={200} color="dark" />
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
          <Icon name="search" size={20} color="gray" />
          <TextInput
            underlineColorAndroid="transparent"
            placeholder="Enter ID"
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
          <Icon name="search" size={20} color="gray" />
          <TextInput
            underlineColorAndroid="transparent"
            placeholder="Enter Name"
            placeholderTextColor="gray"
            style={{flex: 1, fontWeight: '700', backgroundColor: 'white'}}
          />
        </View>
        <View
          style={{
            padding: 5,
            marginHorizontal: 10,
            shadowOffset: {width: 0, height: 0},
            shadowColor: 'black',
            shadowOpacity: 0.2,
            elevation: 1,
            marginTop: Platform.OS == 'android' ? 10 : null,
          }}>
          <Button
            title="Search"
            color="#006633"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
      /*<SafeAreaView style={{flex: 1}}>
        <View style={styles.StyleSheet}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{flex: 1, justifyContent: 'space-between'}}>
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
                <Icon name="location-sharp" size={20} />
                <TextInput
                  underlineColorAndroid="transparent"
                  onChangeText={(cid) => this.setState({cid})}
                  placeholder="ค้นหาตำแหน่งที่ตั้งหรือที่อยู่"
                  placeholderTextColor="gray"
                  style={{flex: 1, fontWeight: '700', backgroundColor: 'white'}}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  padding: 12,
                  borderRadius: 30,
                }}>
                <Button
                  onPress={this.onPressLearnMore}
                  title="INSERT"
                  color="#78186c"
                  width="100%"
                  onPress={this.UserRegistrationFunction}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  padding: 14,
                  borderRadius: 30,
                }}>
                <Button
                  onPress={this.onPressLearnMore}
                  title="DELETE"
                  color="#78186c"
                  width="100%"
                  onPress={this.DeleteStudentRecord}
                />
              </View>
              <View style={{padding: 18}}>
                <FlatList
                  data={this.state.data}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({item}) => (
                    <View
                      style={{
                        backgroundColor: '#cc6699',
                        padding: 10,
                        margin: 10,
                        borderRadius: 10,
                      }}>
                      <Text style={{color: '#fff', fontWeight: 'bold'}}>
                        <Text style={{color: '#000000'}}>cid: {item.cid}</Text>
                      </Text>
                    </View>
                  )}
                />
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </SafeAreaView>*/
    );
  }
}
export default Find;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
