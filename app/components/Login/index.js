import React, { Component } from 'react'
import { Text, TextInput, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import styles from './styles'

class Login extends Component {

  static navigationOptions = {
    title: '用户登录',
    drawerLabel: '用户登录',
    drawerIcon: ({ tintColor }) => (
      <Icon name="ios-person" size={30} color="#4db6ac" />
    ),
  };

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }

    this.checkLogin = this.checkLogin.bind(this)
  }

  checkLogin() {
    const { username, password } = this.state
    this.props.navigation.navigate('AnatomyExample')
  }

  render() {
    const { container, heading, input, btn, LoginText } = styles
    return (
      <View style={container}>
        <Text style={heading}> 用户登录 </Text>
        <TextInput style={input} onChangeText={text => this.setState({ username: text })} />
        <TextInput style={input} secureTextEntry={true} onChangeText={text => this.setState({ password: text })} />
        <TouchableOpacity style={styles.btn} onPress={this.checkLogin}>
          <Text style={LoginText}> 登录 </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Login
