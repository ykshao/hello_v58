import React, { Component } from 'react';
import { DrawerActions } from "react-navigation";
import { Container, Header, Title, Content, Card, CardItem, Button, Left, Right, Body, Icon, Text } from 'native-base';
// import Icon from 'react-native-vector-icons/Ionicons'

// import styles from './styles'

class Home extends Component {

  static navigationOptions = {
    title: '首页',
    drawerLabel: '首页',
    drawerIcon: ({ tintColor }) => (
      <Icon name="ios-home" size={30} color="#4db6ac" />
    ),
  };

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }

    this.openSideBar = this.openSideBar.bind(this);
  }

  openSideBar() {
    this.props.navigation.dispatch(DrawerActions.openDrawer());
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={this.openSideBar}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>首页</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  NativeBase is a free and open source framework that enable
                  developers to build
                  high-quality mobile apps using React Native iOS and Android
                  apps
                  with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  NativeBase is a free and open source framework that enable
                  developers to build
                  high-quality mobile apps using React Native iOS and Android
                  apps
                  with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}

export default Home
