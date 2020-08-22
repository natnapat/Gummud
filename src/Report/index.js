import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import Summary from './Summary';
import Transaction from './Transaction';
import {useNavigation} from '@react-navigation/native';

Entypo.loadFont();

const List = () => {
  const navigate = useNavigation();
  return (
    <View style={styles.container}>
      
      <ScrollView style={styles.bodyContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity 
            onPress={() => navigate.goBack()}
            style={{ marginLeft: 15 }}
          >
            <Entypo name="chevron-left" color="#FFF" size={30} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Reports</Text>
          <TouchableOpacity 
            onPress={() => navigate.goBack() }
            style={{ marginRight: 15 }}
          >
            <Entypo name="export" color="#FFF" size={30} />
          </TouchableOpacity>
        </View>
        <Summary />
        <Transaction />
      </ScrollView>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#3282b8',
  },
  svg: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    top: -170,
  },
  bodyContainer: {
    marginTop: 60,
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFF',
    flex: 1,
    textAlign: 'center',
    marginEnd: 30,
  },
});
