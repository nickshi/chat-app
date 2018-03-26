import React, { Component } from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import AuthForm from "../../components/AuthForm";

import style from './style';

export default class LoginScreen extends Component {
    static propTypes = {
        session: PropTypes.object.isRequired,
    }

    static navigationOptions = {
        tabBarLabel: 'login',
        tabBarIcon:({ tintColor }) => (
            <Image
                source = {require("../../../../images/ic_person_outline.png")}
                style = {{tintColor: tintColor}}
            />
        
        )
    }

    render() {
        const { loginUser } = this.props.session;
        
        
        return (
            <View style={style.container}>
                <AuthForm
                    buttonTitle = {'LOGIN'}
                    onPressSubmit = {loginUser}
                />
            </View>
        );
        
    }
}