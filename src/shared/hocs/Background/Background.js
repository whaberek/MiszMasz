import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

import { colors } from 'shared/variables/colors'

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

const Background = ({ source, children }) => (
    <ImageBackground
        style={styles.container}
        source={source}
    >
        { children }
    </ImageBackground>
);

export { Background };
