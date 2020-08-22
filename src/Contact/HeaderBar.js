import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

MaterialIcons.loadFont();
Entypo.loadFont();
const HeaderBar = ({goBack}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
      <MaterialIcons name="search" color="#000" size={30} />
      </TouchableOpacity>

      <Text style={styles.title}>Contact</Text>
      {<Entypo name="plus" size={30} color="#000" /> }
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#3282b8',
    
  },
});