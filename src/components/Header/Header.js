import React from 'react';
import { Image, StyleSheet, View, Platform } from 'react-native';

import { Background } from 'shared/hocs';
import { colors } from 'shared/variables/colors';

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 29 : 0,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: colors.gray,
    },
    image: {
        width: 110,
        height: 80,
    },
});

const Header = () => (
    <View style={styles.container}>
        <Image
            source={require('assets/images/title.png')}
            style={styles.image}
            resizeMode="contain"
        />
    </View>
);

export { Header };
