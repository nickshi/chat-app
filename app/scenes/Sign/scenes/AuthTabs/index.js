import { TabNavigator } from 'react-navigation';

import LoginScreen from '../Login';
import RegisterScreen from '../Register';

const routeConfigs = {
    Login: {
        screen: LoginScreen,
    },
    Register: {
        screen: RegisterScreen,
    }
}

const tabBarOptions = {
    tabBarOptions: {
        activeTintColor: '#88cc88',
        inactiveTintColor: '#aaaaaa',
        showIcon: true,
        scrollEnabled: false,
        indicatorStyle: {
            display: 'none',
        },
        style: {
            backgroundColor: '#ffffff',
        },
    },
    tabBarPosition: 'bottom'
}

export default TabNavigator(routeConfigs, tabBarOptions);
