import React, { PureComponent } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

import { Header, BottomNavigator, Item } from 'components';
import { SearchInput, Button } from 'shared/components';

import { createTiles } from 'services/Tiles/createTiles';

import { db } from 'database/connect';

import { Background } from 'shared/hocs';
import { colors } from 'shared/variables/colors';
import { SEARCH } from 'shared/constants/search'

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 157,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    item: {
        padding: 5,
        backgroundColor: 'orange',
        marginBottom: 5,
    },
});

class Images extends PureComponent {
    database = null;
    state = {
        images: [],
    };

    async componentDidMount() {
        this.database = await db();
        this.setState({ images: this.database.objects('Tiles') });

        // this._generateImages();
    }

    async _generateImages() {
        try {
            let size = 200;

            let dirs = RNFetchBlob.fs.dirs;

            for (let i = 0; i < 10; i++) {
                RNFetchBlob
                    .config({ path: `${dirs.DocumentDir}/pictures/${size}.png` })
                    .fetch('GET', `http://placehold.it/${size}x${size}`, {
                        'Cache-Control': 'no-store',
                    })
                    .then(this.handleFile);
                ++size;
            }

        } catch (error) {
            this.images = ['http://placehold.it/404x404'];
        }
    }

    handleFile = async res => {
        try {
            createTiles({ path: res.path() });
        } catch (error) {
            console.log(error);
        }
    };

    _handleDelete = async item => {
        this.setState({
            images: [this.database.objectForPrimaryKey('Tiles', item)]
        });
    };

    _renderItem = ({ item }) => (
        <Item
            image={item.path}
            onPress={() => this._handleDelete(item.id)}
        />
    );

    render() {
        return (
            <Background source={require('assets/images/search.png')}>
                <Header/>
                <View style={styles.container}>
                    <FlatList
                        data={this.state.images}
                        keyExtractor={(item, index) => `key-${index}`}
                        renderItem={this._renderItem}
                    />
                </View>
                <BottomNavigator navigation={this.props.navigation}/>
            </Background>
        );
    }
}

export { Images };
