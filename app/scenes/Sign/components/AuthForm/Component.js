import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import styles from './style';

export default class AuthForm extends Component {
    static propTypes = {
        buttonTitle: PropTypes.string.isRequired,
        onPressSubmit: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleButtonPress = this.handleButtonPress.bind(this);
    }

    handleEmailChange(text) {
        this.setState({
            email: text,
        })
    }

    handlePasswordChange(text) {
        this.setState({
            password: text,
        })
    }

    handleButtonPress() {
        const { onPressSubmit } = this.props;
        const {email, password} = this.state;

        onPressSubmit(email, password);

    }

    render() {
        const { buttonTitle } = this.props;
        return (
            <View style = { [styles.container] }>
                <TextInput
                    style = { styles.textInput }
                    placeholder = {'email'}
                    returnKeyType = {'next'}
                    keyboardType = {'email-address'}
                    autoCapitalize = {'none'}
                    onChangeText = { this.handleEmailChange }
                    value = { this.state.email }
                    underlineColorAndroid = { 'transparent' }
                />

                <TextInput
                    style = { styles.textInput }
                    placeholder = {'password'}
                    secureTextEntry={true}
                    returnKeyType = {'done'}
                    autoCapitalize = {'none'}
                    onChangeText = { this.handlePasswordChange }
                    value = { this.state.password }
                    underlineColorAndroid = { 'transparent' }
                />
            

                <TouchableOpacity
                    style = { styles.button }
                    onPress = { this.handleButtonPress }
                >
                    <Text style = { styles.buttonTitle }>{buttonTitle}</Text>

                </TouchableOpacity>
            </View>
        );
        
    }

}