import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import SearchScreen from './src/screens/SearchScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ResDetailScreen from './src/screens/ResDetailScreen'

const Tab = createBottomTabNavigator();
console.disableYellowBox = true;
export  function App({navigation}) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch(route.name){
              case 'Home': {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
              }
              break;
              case 'Search':{
              iconName = focused ? 'md-search' : 'md-search';
              }
              break;
              case 'Profile':{
                iconName=focused ? 'md-person':'md-person'
              }
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const navigator = createStackNavigator(
  {
    Home: App,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Restro Search"
    }
  }
);
export default createAppContainer(navigator);
