import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from 'shared/components'
import { colors } from 'shared/variables/colors'
import { START } from 'shared/constants/start'

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 120,
        alignItems: 'center',
    },
    title: {
        color: colors.white,
        textAlign: 'center',
        fontSize: 18,
        lineHeight: 30,
        marginBottom: 25,
    },
    button: {
        color: colors.accent,
    },
});

const StartInfo = ({ navigation }) => (
    <View style={styles.container}>
        <Text style={styles.title}>
            {START.SLOGAN}
        </Text>
        <Button
            title={START.START}
            onPress={() => navigation.navigate('Search')}
        />
    </View>
);

export { StartInfo };
