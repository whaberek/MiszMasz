import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

import { colors } from 'shared/variables/colors'

const Background = ({ children }) => (
    <ImageBackground
        style={styles.container}
        source={require('assets/images/background.png')}
    >
        { children }
    </ImageBackground>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        flex: 1,
        resizeMode: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
});

export { Background };
