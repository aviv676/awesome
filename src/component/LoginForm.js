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

import logo from '../image/users-solid.png';

class LoginForm extends Component{
    constructor(props)
    {
        super(props);
    }

    render() {
        return (
            <View style={StyleSheet.containerStyle}>
                <View style={styles.logoStyle}>
                    <Thumbnail square large source={logo}/>
                    <Text style={styles.textLogoStyle}>LOGIN</Text>
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
                <Button onPress={()=>this.props.navigation.navigate('MasukForm')} block info style={styles.footerBottomStyle}>
                    <Text>Masuk</Text>
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1
    },
    logoStyle:{
        marginTop: 70,
        marginBottom: 80,
        alignItems:'center',
        justifyContent:'center'
    },
    textLogoStyle:{
        textAlign:'center',
        fontSize:30,
        color: 'black'
    },
    formLoginStyle: {
        marginTop:-30,
        paddingLeft:10,
        paddingRight:30
    },
    inputStyle:{
        color:'black',
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