
import React, { Component } from 'react';
import { View, Text } from "react-native";
import { createDrawerNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import Icon from 'react-native-vector-icons/Ionicons'

import Home from './components/Home';
import Dashboard from './components/Dashboard';
import AnatomyExample from './components/AnatomyExample';
import Touchables from './components/Demo';


/**
 * ui component1
 */
class ChooseSkodaScreen extends Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-person" size={25} style={{ color: tintColor }} />
    )
  }

  render() {
    return (
      // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}>
      //   <Text>ChooseSkodaScreen!</Text>
      // </View>
      <Touchables></Touchables>
    );
  }
}

/**
 * ui component2
 */

class ChooseFiatScreen extends Component {

  static navigationOptions = {
    headerTitle: 'ChooseRenaulScreen',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-person" size={25} style={{ color: tintColor }} />
    )
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}>
        <Text>ChooseFiatScreen!</Text>
      </View>
    );
  }
}

/**
 * tab
 */
const tabHome = createBottomTabNavigator({
  Skoda: ChooseSkodaScreen,
  Fiat: ChooseFiatScreen,
},
  {
    tabBarOptions: {
      activeTintColor: 'steelblue',
      inactiveTintColor: 'gray',
      showIcon: true
    },
  });

/**
 * AppStack 入口
 */
const AppStack = createDrawerNavigator({
  Home: { screen: Home },
  Dashboard: { screen: Dashboard },
  tabHome: {
    screen: tabHome,
    navigationOptions: {
      title: '标签卡片',
      drawerLabel: '标签卡片',
      drawerIcon: ({ tintColor }) => (
        <Icon name="ios-keypad" size={30} color="#42a5f5" />
      )
    }
  },
  AnatomyExample: AnatomyExample
}, {
    initialRouteName: 'Home',//初始路由的routeName。
    drawerWidth: 200, //抽屉的宽度或返回的功能。
    drawerPosition: 'left'
  });


export default createAppContainer(AppStack)