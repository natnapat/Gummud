import React from 'react';
import { StyleSheet,View,Text,FlatList } from 'react-native';
import Summary from './Summary';

export default class Transaction extends React.Component {

  state={
    data:[]
  }

  fetchData= async()=>{
    const response = await fetch('http://localhost:3000/'); 
    const testTable = await response.json();
    this.setState({data: testTable});
  }
  componentWillMount(){
    this.fetchData();
}

  render() {
    return (
      <View style={styles.container}>
            
      <FlatList
        data={this.state.data}
        keyExtractor= {(item,index) => index.toString()}
        renderItem={({item})=>

        <View style={{backgroundColor:'#FFF',padding:10,margin:10,borderRadius:10}}>
          <Text style={{color:'#000', fontWeight:'bold'}}>
            <Text style={{color:'#000000'}}>Transaction: {item.id}</Text>{'\t'}{item.time}</Text>
          
          <Text style={{
            color: item.type == 1 ? 'red' : 'green',
            fontSize: 30,
            
          }}>
            {item.amount}
        
          </Text>
          
        </View>

        } 
      />
  </View>

    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
    
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

});