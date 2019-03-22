import React from 'react';
import { Image, View } from 'react-native';

import { Button } from 'shared/components';

const Item = ({ id, image, onPress }) => {

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: `file://${image}` }}
            />
            <Button
                title='Remove'
                onPress={onPress}
            />
        </View>
    )
};

const styles = {
    container: {
        marginBottom: 15,
    },
    image: {
        width: 200,
        height: 200,
    },
};

export { Item };
