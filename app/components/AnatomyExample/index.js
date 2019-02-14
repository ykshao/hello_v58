import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { DrawerActions } from "react-navigation";
import { Icon, Spinner, Toast, Container, Header, Left, Right, Body, Text, Title, Content, Form, Item, Label, Input, Button } from 'native-base';
import { connect } from 'react-redux';

class FormExample extends Component {

    static navigationOptions = {
        title: 'ui视图',
        drawerLabel: 'ui视图',
        drawerIcon: ({ tintColor }) => (
            <Icon name="ios-settings" size={30} color="#4db6ac" />
        )
    }

    constructor(props) {
        super(props);
        this.Login = this.Login.bind(this)
        this.openSideBar = this.openSideBar.bind(this)
    }

    Login() {
        Toast.show({
            text: '密码错误!',
            buttonText: '我知道了'
        })
    }

    openSideBar() {
        console.warn('111111')
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
                        <Title>用户登录</Title>
                    </Body>
                    <Right>

                    </Right>
                </Header>
                <Content>
                    <Spinner color='blue' />
                    <Form>
                        <Item fixedLabel>
                            <Label>用户名</Label>
                            <Input defaultValue={this.props.GetWeatherReducer.status}/>
                        </Item>
                        <Item fixedLabel last>
                            <Label>密码</Label>
                            <Input secureTextEntry={true} />
                        </Item>
                    </Form>
                    <Button block style={styles.btn} onPress={this.Login}>
                        <Text>登录</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#007aff'
    },
    btn: {
        margin: 30
    }
});

/**
 * select
 * @param {*} store 
 */
function select(store) {
    return {
        GetWeatherReducer: store.GetWeatherReducer,
    }
}

export default connect(select)(FormExample);