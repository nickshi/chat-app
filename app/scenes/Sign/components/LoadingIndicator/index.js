import React from 'react';
import {
    View,
    ActivityIndicator,
} from 'react-native';

import styles from './style';

const LoadingIndicator = () => {
    return (
        <View style = { styles.container }>
            <ActivityIndicator style = { styles.indicator }/>
        </View>
    );
}

export default LoadingIndicator;