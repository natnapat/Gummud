import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import mocks from './mocks.json';
import Ionicons from 'react-native-vector-icons/Ionicons';

Ionicons.loadFont();

const ItemView = ({item}) => {
  return (
    <View style={styles.itemContainer}>
        <View style={styles.itemLogo}>
          <Image
            style={styles.itemImage}
            source={ { uri:item.image }}
          />
        </View>
        <View style={styles.itemBody}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>{item.price}</Text>
          <View style={styles.itemcolorsize}>
            <Text style={styles.itemColor}>Color: {item.color}</Text>
            <Text style={styles.itemSize}>Color: {item.size}</Text>
          </View>
        </View>
        
      </View>
  );
};

const ListSearch = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>Results</Text>
      </View>
      <View style={styles.containerBody}>
        {mocks.map(item => {
          return <ItemView item={item} />;
        })}
      </View>
    </View>
  );
};

export default ListSearch;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
  },
  headerContainer: {
    paddingHorizontal: 15,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5F646A',
  },
  itemText: {
    color: '#24333A',
    fontSize: 14,
    fontWeight: 'bold',
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  itemContainer: {
    borderWidth: 1.5,
    borderColor: '#EFEFF0',
    marginBottom: 12,
    padding: 20,
    borderRadius: 12,
  },
  itemPrice: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#0D1820',
    marginBottom: 10,
  },
  itemPriceOri: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#828595',
    textDecorationLine: 'line-through',
  },
  containerBody: {
    marginTop: 15,
  },
  icon: {
    marginRight: 10,
  },
  saleoff: {
    position: 'absolute',
    backgroundColor: '#FFB3A7',
    color: '#F62459',
    fontWeight: 'bold',
    padding: 6,
    borderRadius: 10,
    paddingHorizontal: 10,
    right: -10,
    top: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
  },
  itemImage: {
    width: 100,
    height: 100,
  },
  itemLogo: {
    padding: 10,
  },

  itemColor: {
    fontWeight: '500',
  },
  itemSize: {
    fontWeight: '500',
    marginLeft: 40,
  },
  itemcolorsize: {
    flexDirection: 'row',
  },

  itemName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'gray',
  },
  itemPrice: {
    fontWeight: 'bold',
    marginVertical: 4,
    fontSize: 17,
  },

  itemBody: {
    flex: 1,
    paddingHorizontal: 10,
  },
  
});
