import React, { PureComponent } from 'react';
import { Image, View, StyleSheet } from 'react-native';

import { HomeInfo } from 'components';

import { Background } from 'shared/hocs';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        marginTop: 120,
        width: 270,
    },
});

class Start extends PureComponent {
    render() {
        return (
            <Background>
                <View style={styles.container}>
                    <Image
                        source={require('assets/images/title.png')}
                        style={styles.image}
                        resizeMode="contain"
                    />
                    <HomeInfo />
                </View>
            </Background>
        );
    }
}

export { Start };
