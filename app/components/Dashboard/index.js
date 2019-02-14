import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

class Dashboard extends Component {

  static navigationOptions = {
    title: '个人中心',
    drawerLabel: '个人中心',
    drawerIcon: ({ tintColor }) => (
      <Icon name="ios-person" size={30} color="#ffa726" />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> Dashboard </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
})

export default Dashboard