import React, { PureComponent } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';

import { Start, Search, Images } from 'scenes';

import { colors } from 'shared/variables/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
});

const AppNavigator = createStackNavigator(
    {
        Start: Start,
        Search: Search,
        Images: Images,
    },
    {
        initialRouteName: 'Start',
        headerMode: 'none',
    },
);

const AppContainer = createAppContainer(AppNavigator);

class MainApp extends PureComponent {
    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <AppContainer/>
            </SafeAreaView>
        );
    }
}

export { MainApp };
