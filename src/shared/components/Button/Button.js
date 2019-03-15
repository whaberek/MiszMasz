import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements';

import { colors } from 'shared/variables/colors'

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.accent,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 25,
        paddingRight: 25,
        borderRadius: 30,
    },
    title: {
        color: colors.white,
        fontSize: 18,
        letterSpacing: 2,
    }
});

const Button = ({ onPress, title }) => (
    <TouchableOpacity
        style={styles.container}
        onPress={onPress}
    >
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
);

export { Button };
