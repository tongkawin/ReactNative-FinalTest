import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Linking,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons';

class Pac extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{height: 300}}>
          <Swiper
            style={styles.wrapper}
            showsButtons={true}
            loop={true}
            autoplay={true}>
            <View style={styles.container}>
              <Image
                source={require('D:/Final/StaffsPhoto/1.jpg')}
                style={styles.size}
              />
            </View>
            <View style={styles.container}>
              <Image
                source={require('D:/Final/StaffsPhoto/2.jpg')}
                style={styles.size}
              />
            </View>
            <View style={styles.container}>
              <Image
                source={require('D:/Final/StaffsPhoto/3.jpg')}
                style={styles.size}
              />
            </View>
            <View style={styles.container}>
              <Image
                source={require('D:/Final/StaffsPhoto/4.jpg')}
                style={styles.size}
              />
            </View>
          </Swiper>
          <Text
            style={{
              marginLeft: 10,
              marginTop: 5,
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            วิสาหกิจชุมชนกลุ่มอนุรักษ์ป่าชายเลนบ้านแหลมโฮมสเตย์
          </Text>
          <Icon name="location-sharp" size={20} />
          <View>
            <Text style={{marginLeft: 25, fontStyle: 'italic'}}>
              เลขที่ 128 หมู่ 7 ตำบลท่าศาลา ถนนนครศรี-ท่าศาลา-สุราษฎ์ ต.ท่าศาลา
              อ.ท่าศาลา จ.นครศรีธรรมราช 80160
            </Text>
            <Text style={{marginLeft: 25, fontStyle: 'italic'}}>
              Readmore Click Link
            </Text>
            <Text
              onPress={() => Linking.openURL(url)}
              style={{marginLeft: 25, fontStyle: 'italic', color: 'blue'}}>
              {' '}
              {url}
            </Text>
          </View>
        </View>
        <View style={{margin: 20}}>
          <View>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              TOP 5 อาหารเมืองนคร
            </Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Image
              source={require('D:/Final/StaffsPhoto/11.jpg')}
              style={styles.size2}
            />
            <Image
              source={require('D:/Final/StaffsPhoto/22.jpg')}
              style={styles.size2}
            />
            <Image
              source={require('D:/Final/StaffsPhoto/33.jpg')}
              style={styles.size2}
            />
            <Image
              source={require('D:/Final/StaffsPhoto/44.jpg')}
              style={styles.size2}
            />
            <Image
              source={require('D:/Final/StaffsPhoto/55.jpg')}
              style={styles.size2}
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
export default Pac;
const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  size: {
    width: 450,
    height: 300,
  },
  size2: {
    borderRadius: 15,
    borderColor: 'gray',
    borderWidth: 2,
    width: 250,
    height: 200,
    marginLeft: 10,
  },
});
const url =
  'https://thailandtourismdirectory.go.th/th/info/attraction/detail/itemid/21344';
