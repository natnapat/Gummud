import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import HeaderBar from './HeaderBar';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';

Entypo.loadFont();

const dataExample = [
  {
    name: 'Coat',
    price: '$10',
    color: 'Black',
    size: 'XL',
    status: 'Comming',
    image: 'https://image.shutterstock.com/image-photo/close-man-blank-tshirt-260nw-140861086.jpg'
  },
  {
    name: 'Whale toy',
    price: '$20',
    color: 'Black',
    size: 'XL',
    status: 'Received',
    image: 'https://image.shutterstock.com/image-photo/man-wearing-blank-tshirt-isolated-600w-127241900.jpg'
  },
  {
    name: 'Rabbit',
    price: '$10',
    color: 'Black',
    size: 'XL',
    status: 'Comming',
    image: 'https://image.shutterstock.com/image-photo/man-wearing-dark-grey-tshirt-600w-194788424.jpg'
  },
  {
    name: 'Bodysuit',
    price: '$22',
    color: 'Black',
    size: 'XL',
    status: 'Comming',
    image: 'https://image.shutterstock.com/image-photo/white-tshirt-on-cute-boy-600w-166297466.jpg'
  },
  {
    name: 'Whale',
    price: '$10',
    color: 'Black',
    size: 'XL',
    status: 'Comming',
    image: 'https://image.shutterstock.com/image-photo/dark-blue-tshirt-template-ready-600w-263509091.jpg'
  },
  {
    name: 'Clothing',
    price: '$10',
    color: 'Black',
    size: 'XL',
    status: 'Received',
    image: 'https://image.shutterstock.com/image-photo/pretty-smiling-blonde-woman-wearing-260nw-317400071.jpg'
  },
];

const Warehouse = ({navigation}) => {
  const [status, setStatus] = useState('All');
  const [data, setData] = useState(dataExample);
  const setStatusFilter = status => {
    if (status != 'All') {
      setData([...dataExample.filter(e => e.status == status)]);
    } else {
      setData(dataExample);
    }

    setStatus(status);
  };
  const renderItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.itemLogo}>
          <Image
            style={styles.itemImage}
            // source={require('../assets/clothing.png')}
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
        <View
          style={[
            styles.itemStatus,

            {
              backgroundColor:
                item.status == 'Received' ? '#3282b8' : '#69C080',
            },
          ]}>
          <Text style={[styles.itemStatusText]}>{item.status}</Text>
        </View>
      </View>
    );
  };
  const separator = () => {
    return <View style={{height: 1, backgroundColor: '#F1F1F1'}} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar goBack={() => navigation.goBack()} />
      <View style={styles.conFilter}>
        <View style={styles.listTab}>
          <TouchableOpacity
            style={[
              styles.btnTab,
              status == 'All' && styles.btnTabActive,
              {borderTopLeftRadius: 5, borderBottomLeftRadius: 5},
            ]}
            onPress={() => setStatusFilter('All')}>
            <Text
              style={[styles.textTab, status == 'All' && styles.textTabActive]}>
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setStatusFilter('Comming')}
            style={[styles.btnTab, status == 'Comming' && styles.btnTabActive]}>
            <Text
              style={[
                styles.textTab,
                status == 'Comming' && styles.textTabActive,
              ]}>
              Comming
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setStatusFilter('Received')}
            style={[
              styles.btnTab,
              status == 'Received' && styles.btnTabActive,
              {borderTopRightRadius: 5, borderBottomRightRadius: 5},
            ]}>
            <Text
              style={[
                styles.textTab,
                status == 'Received' && styles.textTabActive,
              ]}>
              Received
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.dateFilterContainer}>
          <View style={styles.dateFilter}>
            <Text style={styles.textFrom}>
              From <Text style={styles.textDate}>15/11/2020</Text>{' '}
              {<Entypo name="triangle-down" size={15} color="#000" /> }
            </Text>
          </View>
          <View style={styles.dateFilter}>
            <Text style={styles.textFrom}>
              To <Text style={styles.textDate}>16/11/2020</Text>{' '}
              {<Entypo name="triangle-down" size={15} color="#000" /> }
            </Text>
          </View>
        </View>
        <FlatList
          data={data}
          keyExtractor={(e, i) => i.toString()}
          ItemSeparatorComponent={separator}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default Warehouse;

const styles = StyleSheet.create({
  itemStatus: {
    backgroundColor: 'green',
    position: 'absolute',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    right: 12,
    top: 10,
  },
  itemStatusText: {
    color: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
  },
  itemImage: {
    width: 50,
    height: 50,
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

  dateFilterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  textFrom: {
    color: 'gray',
  },
  textDate: {
    color: '#222',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  listTab: {
    flexDirection: 'row',
    borderRadius: 10,
    alignSelf: 'center',
  },

  btnTab: {
    // flex: 1,
    width: Dimensions.get('window').width / 3.6,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: '#EBEBEB',
    padding: 10,
    justifyContent: 'center',
  },
  btnTabActive: {
    backgroundColor: '#3282b8',
  },

  textTabActive: {
    color: '#fff',
  },

  textTab: {
    fontSize: 16,
    fontWeight: '500',
    color: 'gray',
  },

  conFilter: {
    flex: 1,
    marginTop: 20,
    // alignItems: 'center',
  },
});