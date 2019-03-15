import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import { Background } from 'shared/hocs';
import { colors } from 'shared/variables/colors';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        flex: 1,
        flexDirection: 'row',
        borderTopColor: colors.grayAlpha,
        borderTopWidth: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    element: {
        position: 'relative',
        width: '25%',
        padding: 25,
        textAlign: 'center',
        paddingBottom: 25,
    },
    separator: {
        position: 'absolute',
        right: 0,
        width: 1,
        height: 25,
        backgroundColor: colors.grayAlpha,
        marginTop: 25,
    },
});

const Nav = ({ name, last, onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.element}>
        <Icon
            name={name}
            type='font-awesome'
            color={colors.white}
        />
        {
            !last && <View style={styles.separator}/>
        }
    </TouchableOpacity>
);


const BottomNavigator = ({ navigation }) => (
    <View style={styles.container}>
        <Nav name="search" onPress={() => navigation.navigate('Search')}/>
        <Nav name="book" onPress={() => navigation.navigate('Images')}/>
        <Nav name="star"/>
        <Nav name="info-circle" last/>
    </View>
);

export { BottomNavigator };
