import React, { PureComponent } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

import { Header, BottomNavigator } from 'components';
import { SearchInput } from 'shared/components';

import { Background } from 'shared/hocs';
import { colors } from 'shared/variables/colors';
import { SEARCH } from 'shared/constants/search'

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    text: {
        color: colors.white,
        fontSize: 20,
    }
});

class Images extends PureComponent {
    size: 100;
    state = {
        image: null,
    };

    componentDidMount() {
        RNFetchBlob
            .config({
                fileCache : true,
            })
            .fetch('GET', 'http://placehold.it/404x404.jpg', {})
            .then(res => this.images = this.setState({ image: res.path() } ))
    }

    // async _generateImages() {
    //     try {
    //          for (let i = 0; i < 30; i++) {
    //             this.size++;
    //              this.images.push(`http://placehold.it/${this.size}x${this.size}`)
    //         }
    //     } catch (e) {
    //         this.images = ['http://placehold.it/404x404'];
    //     }
    // };


    render() {
        return (
            <Background source={require('assets/images/search.png')}>
                <Header/>
                <View style={styles.container}>
                    {
                        this.state.image && (
                            <Image
                                style={{ width: 100, height: 100 }}
                                source={{ source: this.state.image }}
                            />
                        )
                    }

                </View>
                <BottomNavigator navigation={this.props.navigation}/>
            </Background>
        );
    }
}

export { Images };
