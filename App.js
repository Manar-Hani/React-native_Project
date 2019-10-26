/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Image } from 'react-native';
import Search from './Search'
import Restaurants from './Restaurants'
import Splash from './Splash'
import Page1 from './tutorials/Page1'
import HomePage from './HomePage'
import CardDetails from './CardDetails'
import Places from './Places'
import Things from './Things'
import { createStackNavigator , createAppContainer,createBottomTabNavigator, createSwitchNavigator} from "react-navigation"

const TabNavigator = createBottomTabNavigator({
    Home:HomePage,
    Search:Search,
    Places:Places,
    Restaurants:Restaurants,
    Things:Things
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
            return <Image source={require('./icons/home.png')} style={{width: 30 , height: 30}} />;
        } 
        else if (routeName === 'Search')
        {
          return <Image source={require('./icons/filter.png')} style={{width: 30, height: 30}} />;
        }
        else if (routeName === 'Places')
        {
          return <Image source={require('./icons/find-places.png')} style={{width: 30, height: 30}} />;
        }
        else if (routeName === 'Restaurants')
        {
          return <Image source={require('./icons/restaurants.png')} style={{width: 30, height: 30}} />;
        }
        else if (routeName === 'Things')
        {
          return <Image source={require('./icons/todo.png')} style={{width: 30, height: 30}} />;
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: 'green',
      inactiveTintColor: 'gray',
    },
  }
  );

  TabNavigator.navigationOptions= {
    header:null
  };
  const Intro = createStackNavigator({Page1 :Page1});

  const AppNavigator = createStackNavigator({
    // Splash:Splash,
    //Page1:Page1,
    Tabs:{screen: TabNavigator},
    CardDetails:CardDetails
    
}
// ,{
//   headerMode: 'none',
// }
);

const switchNavigator= createSwitchNavigator({
    Splash:Splash,
   AppNavigator:AppNavigator,
   Intro :Intro,
}, 
{
  initialRouteName:"Splash"
});





export default createAppContainer(switchNavigator);