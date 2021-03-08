import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
} from 'react-native';
import{
    Item,
    Input,
    Form,
    Label,
    Button,
    Thumbnail,
    Text
}from 'native-base';

import logo from '../image/users-solid.svg';
import bgImage from '..image/babi.jpg';

class LoginForm extends Component{
    constructor(props)
    {
        super(props);
    }

    render() {
        return (
            <view style={StyleSheet.containerStyle}>
                <Image style={StyleSheet.bgImageStyle} source={bgImage}/>
                <View style={styles.logoStyle}>
                    <Thumbnail square large source={logo}/>
                    <Text style={styles.textLogoStyle}>Login</Text>
                </View>
                <Form style={styles.formLoginStyle}>
                    <Item floatingLabel>
                        <Label>
                            <Text style={styles.inputStyle}>Username </Text>
                        </Label>
                        <Input style={styles.inputStyle}/>
                    </Item>
                    <Item floatingLabel>
                        <Label>
                            <Text style={styles.inputStyle}>Password</Text>
                        </Label>
                        <Input style={styles.inputStyle} secureTextEntry={true}/>
                    </Item>
                </Form>
                <Button block info style={styles.footerBottomStyle}>
                    <Text>Masuk</Text>
                </Button>
            </view>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1
    },
    bgImageStyle: {
        flex:1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    logoStyle:{
        marginTop: 70,
        marginBottom: 80,
        alignItems:'center',
        justifyContent:'center'
    },
    textLogoStyle:{
        fontSize:15,
        color: 'white'
    },
    formLoginStyle: {
        marginTop:-30,
        paddingLeft:10,
        paddingRight:30
    },
    inputStyle:{
        color:'white',
        marginBottom:6,
        fontSize:14
    },
    footerBottomStyle:{
        marginTop:26,
        paddingTop:10,
        marginLeft:16,
        marginRight:16
    }
})

export default LoginForm;