import React from 'react';
import {StyleSheet, Text, View, TextInput, Dimensions, ScrollView} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MapView, {Marker} from 'react-native-maps';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

// import LinearGradient from 'react-native-linear-gradient';
Octicons.loadFont();
AntDesign.loadFont();
Feather.loadFont();
import Card from './Card';
import { FlatList } from 'react-native-gesture-handler';
const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerBody}>
        <Text style={styles.headerText}>Contact</Text>
        <View style={styles.headerRightContainer}>
          <Entypo name="map" size={25} color="#000" />
        </View>
      </View>
      <View style={styles.groupInputs}>
        <View style={styles.wrapperInput}>
          <AntDesign name="search1" size={18} color="gray" />
          <TextInput style={styles.inputText} value="Bangkok" />
        </View>
        <View style={styles.wrapperInput}>
          <Feather name="map-pin" size={18} color="gray" />
          <TextInput
            style={[styles.inputText, {color: 'purple'}]}
            value="Current Location"
          />
          <Text></Text>
        </View>
      </View>
    </View>
  );
};

const Map = () => {
  return (
    <View>
      <MapView
        style={styles.mapview}
        initialRegion={{
          latitude: 13.753920,
          longitude: 100.540208,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{
            latitude: 13.753920,
            longitude: 100.540208,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <View
            style={{
              backgroundColor: 'purple',
              padding: 5,
              borderRadius: 40,
            }}>
            <View
              style={{
                backgroundColor: '#C49DBD',
                padding: 5,
                borderRadius: 20,

                shadowColor: '#714B87',
                shadowOffset: {
                  width: 2,
                  height: 2,
                },
                shadowOpacity: 1,
                shadowRadius: 20,
              }}>
              
            </View>
          </View>
        </Marker>
      </MapView>
    </View>
  );
};

const ListCard = () => {
  state={
    data2:[]
  }

  fetchData= async()=>{
    const response = await fetch('http://localhost:3000/contact'); 
    const testTable2 = await response.json();
    this.setState({data2: testTable2});
  }
  
  this.fetchData();
  
  return (
    <ScrollView>
      
    <View>
      <Card
        // title=""
        noHeader
        noFooter
        book
        info={{
          image: 'https://randomuser.me/api/portraits/women/60.jpg',
          name: 'Natnapat Keeratikornpisut',
          time: '5 min',
          address: 'Nakhon si thammarat',
          detail: '0835341128',
          islike: true,
          rating: 4,
          tag: 'Dealer',
        }}
      />
      <Card
        // title=""
        noHeader
        noFooter
        book
        info={{
          image: 'https://randomuser.me/api/portraits/women/12.jpg',
          name: 'Kitty Neko Chan',
          time: '32 min',
          address: 'Somwwhere I belong.',
          detail: 'Meow Meow',
          islike: false,
          rating: 5,
          tag: 'Partner',
        }}
      />
    </View>
    
    </ScrollView>
  );
};

const Contact= () => {
  return (
    <View style={styles.container}>
      <Header />
      <Map />
      <ListCard />
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    padding: 15,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
  headerRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {marginLeft: 12, transform: [{rotate: '-90deg'}]},
  headerBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    // padding: 15,
  },
  wrapperInput: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  inputText: {
    padding: 10,
    flex: 1,
  },
  mapview: {
    width: Dimensions.get('window').width,
    height: 300,
  },
  marker: {
    backgroundColor: '#6C4C86',
    padding: 10,

    borderRadius: 20,
  },
});