/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

import Base from './common/Base';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text: 'hellworld'
    }

    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(text) {
    this.setState({ text })
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('./images/logo.jpg')} style={styles.logo} />
        </View>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <View>
              <TextInput
                style={styles.inputs}
                placeholder="服务地址, 如 http://leanote.com"
                keyboardType="email-address"
                clearButtonMode="while-editing"
                returnKeyType="next"
                onEndEditing={() => {
                  this.refs["email"].focus();
                }}
              />
              <View style={styles.line}></View>
            </View>
            <TextInput
              ref="email"
              style={styles.inputs}
              placeholder="用户/邮箱"
              keyboardType="email-address"
              clearButtonMode="while-editing"
              returnKeyType="next"
              onEndEditing={() => {
                this.refs["pwInput"].focus();
              }}
            />
            <View style={styles.line}></View>
            <TextInput
              ref="pwInput"
              style={styles.inputs}
              password="true"
              placeholder="密码"
              clearButtonMode="while-editing"
              returnKeyType="done"
              onChangeText={(pw) => this.setState({ password: pw })}
            />
          </View>
          <View style={styles.buttonGroup}>
            <TouchableOpacity activeOpacity={0.8} onPress={this._doLogin}>
              <View style={styles.Login}>
                <Text style={styles.LoginText}>登   录</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8} onPress={this._doReg}>
              <View style={styles.Reg}>
                <Text style={styles.RegText}>创建账户</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#00579b',
  },
  logoContainer: {
    backgroundColor: '#fff',
    marginTop: 80,
    width: 70,
    height: 70,
    borderRadius: 35,
    overflow: 'hidden',
    // 垂直居中
    justifyContent: 'center',
  },
  logo: {
    // padding: 40,
    width: 60,
    height: 60,
    alignSelf: 'center',
    // borderRadius: 30,
  },
  form: {
    marginTop: 30,
  },
  inputContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    overflow: 'hidden',
  },
  inputs: {
    height: 40,
    width: Base.width / 1.3,
    fontSize: 14,
    padding: 10,
  },
  line: {
    height: 0.5,
    backgroundColor: '#ccc',
  },
  buttonGroup: {
    marginTop: 30,
  },
  Login: {
    alignItems: 'center',
    width: Base.width / 1.3,
    height: 40,
    backgroundColor: '#0379d5',
    // borderRadius: 5,
  },
  LoginText: {
    marginTop: 10,
    fontSize: 16,
    color: '#fff',
  },
  Reg: {
    alignSelf: 'center',
    marginTop: 20,
  },
  RegText: {
    color: '#eee'
  },
  selfHost: {
    // marginTop: 50,
    position: 'absolute',
    bottom: -100,
    // left: 0,
    // right: 0,
    // alignItems: 'center',
    width: Base.width / 1.3,
  },
  selfHostText: {
    alignSelf: 'center',
  }
});
