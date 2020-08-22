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
      <MaterialIcons name="share" color="#000" size={30} />
      </TouchableOpacity>

      <Text style={styles.title}>Overview</Text>
      <MaterialIcons name="settings" color="#000" size={30} />
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
    fontSize: 22,
  },
});