import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import Home from './src/Home';
import List from './src/List';
import Report from './src/Report';
import Warehouse from './src/Warehouse';
import Contact from './src/Contact';

Entypo.loadFont();

function Blank(){
  return(
    <View></View>
  );
}

const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {
  const screenOptions = ({route}) => ({
    tabBarIcon: ({focused, color, size}) => {
      let iconName;

      if (route.name === 'Overview') {
        iconName = 'pie-chart';
      } else if (route.name === 'List') {
        iconName = 'list';
      } else if (route.name === 'Report') {
        iconName = 'credit';
      } else if (route.name === 'Warehouse') {
        iconName = 'database';
      } else if (route.name === 'Contact') {
        iconName = 'google-hangouts';
      }

      // You can return any component that you like here!
      return <Entypo name={iconName} size={size} color={color} />;
    },
  });
  return (
    <>
      <NavigationContainer>
      <Tab.Navigator
        screenOptions={screenOptions}
        tabBarOptions={{
          activeTintColor: '#3282b8',
          inactiveTintColor: '#464962',
        }}>
        <Tab.Screen name="Overview" component={Home} />
        <Tab.Screen name="List" component={List} />
        <Tab.Screen name="Report" component={Report} />
        <Tab.Screen name="Warehouse" component={Warehouse} />
        <Tab.Screen name="Contact" component={Contact} />
      </Tab.Navigator>
    </NavigationContainer>
    </>
  );
};

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

export default App;
