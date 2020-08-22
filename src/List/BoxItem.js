import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

MaterialIcons.loadFont();

const BoxItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerLeft}>
        <Text style={styles.headerText}>Search</Text>
        <Text style={[styles.headerText, {color: '#000', marginTop: 10}]}>
          T-shirt
        </Text>
      </View>
      {<MaterialIcons name="search" size={28} color="#828595" /> } 
    </View>
  );
};

export default BoxItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    margin: 10,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 25,
    // shadow
    shadowColor: '#222',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 12,
  },
  headerText: {
    color: '#828595',
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'gray',
  },
  itemImage: {
    width: 50,
    height: 50,
  },
});
