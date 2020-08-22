import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

MaterialIcons.loadFont();

const Summary = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerLeft}>
        <Text style={styles.headerText}>Total Balance</Text>
        <Text style={[styles.headerText, {color: 'green', marginTop: 10}]}>
          +7540 THB
        </Text>
      </View>
      <View style={styles.containerRight}>
        <Text style={styles.headerText}>Monthly Change</Text>
        <Text style={[styles.headerText, {color: 'red', marginTop: 10}]}>
          -540 THB
        </Text>
      </View>
      {/* {<MaterialIcons name="star" size={28} color="#828595" /> }  */}
    </View>
  );
};

export default Summary;

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
  containerRight:{
    borderLeftWidth: 2,
    borderLeftColor: '#828595',
    marginRight: 45,
    paddingLeft: 20
  },
  headerText: {
    color: '#828595',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
