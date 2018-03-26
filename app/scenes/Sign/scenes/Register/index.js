import React, { Component } from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import AuthForm from "../../components/AuthForm";
import actionsCreator from "../../../../store/session/actions";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import style from './style';

class LoginScreen extends Component {
    static propTypes = {
        session: PropTypes.object.isRequired,
    }

    static navigationOptions = {
        tabBarLabel: 'signup',
        tabBarIcon:({ tintColor }) => (
            <Image
                source = {require("../../../../images/ic_person_add.png")}
                style = {{tintColor: tintColor}}
            />
        
        )
    }

    render() {
        const { signupUser } = this.props.session;
        
        return (
            <View style={style.container}>
                <AuthForm
                    buttonTitle = {'SIGNUP'}
                    onPressSubmit = {signupUser}
                />
            </View>
        );
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        session: bindActionCreators(actionsCreator, dispatch),
    }
};

export default connect(null, mapDispatchToProps)(LoginScreen);