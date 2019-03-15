import React from 'react';
import { StyleSheet, Image, View, Dimensions } from 'react-native';

import { colors } from 'shared/variables/colors'

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        flex: 1,
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        position: 'absolute',
        top: 0,
        left: 0,
    },
});

const Background = ({ source, children }) => (
    <View style={styles.container}>
        <Image source={source} style={styles.image}/>
        { children }
    </View>
);

export { Background };
