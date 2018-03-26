import React, { Component } from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import AuthTabs from "./scenes/AuthTabs";
import LoadingIndicator from "./components/LoadingIndicator";

import { connect } from 'react-redux';
import style from './style';

class Sign extends Component {

    static propTypes = {
        restoring: PropTypes.bool.isRequired,
        loading: PropTypes.bool.isRequired,
    }

    render() {
        const { restoring, loading } = this.props;
        
        return (
            <View style={style.container}>
                <AuthTabs/>
                { loading && <LoadingIndicator/> }
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        restoring: state.session.restoring,
        loading: state.session.loading,
    }
};

export default connect(mapStateToProps)(Sign);