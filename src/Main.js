import React, { PureComponent } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import { Start } from 'scenes';

const AppNavigator = createStackNavigator(
    {
        Start: Start,
    },
    {
        initialRouteName: 'Start',
        headerMode: 'none'
    },
);

const AppContainer = createAppContainer(AppNavigator);

class MainApp extends PureComponent {
    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        return <AppContainer />;
    }
}

export { MainApp };
