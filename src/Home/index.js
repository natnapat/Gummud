import React from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
Entypo.loadFont();

const Home = () => {
  const data = [
    {
      name: "BKK",
      sales: 2400,
      color: "#2d4059",
      legendFontColor: "#2d4059",
      legendFontSize: 15
    },
    {
      name: "HKT",
      sales: 1200,
      color: "#ffbd69",
      legendFontColor: "#ffbd69",
      legendFontSize: 15
    },
    {
      name: "BEI",
      sales: 800,
      color: "#decdc3",
      legendFontColor: "#decdc3",
      legendFontSize: 15
    },
    {
      name: "NYC",
      sales: 2000,
      color: "#f37121",
      legendFontColor: "#f37121",
      legendFontSize: 15
    },
    {
      name: "MSC",
      sales: 1000,
      color: "#c70039",
      legendFontColor: "#c70039",
      legendFontSize: 15
    }
  ];
  return(
    <View style={styles.container}>   
      <ScrollView style={styles.bodyContainer}>
        <View style={styles.headerContainer}>   
          <Text style={styles.headerText}>Overview</Text>
        </View>
        <View >
  
  <LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#000",
      backgroundGradientFrom: "#FFF",
      backgroundGradientTo: "#FFF",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => '#3282b8',
      labelColor: (opacity = 1) => '#3282b8',
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#3282b8"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>
       <View style={styles.container}>
       <PieChart
          data={data}
          width={300}
          height={220}
          chartConfig={{
            backgroundColor: "#000",
            backgroundGradientFrom: "#3282b8",
            backgroundGradientTo: "#3282b8",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
          accessor="sales"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
       </View>
       <View style={styles.container}>
         <Text>All time Profits : </Text>
         <Text> +120000 THB</Text>
        
         
       </View>
       
      </ScrollView>
      
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    margin: 10,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 50,
    // shadow
    shadowColor: '#222',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 12,
  },
  headerText: {
    color: '#3282b8',
    fontSize: 30,
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
  headerContainer: {
    paddingHorizontal: 15,
  },
});
