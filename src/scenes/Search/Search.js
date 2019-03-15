import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, Keyboard } from 'react-native';

import { Header, BottomNavigator } from 'components';
import { SearchInput } from 'shared/components';

import { Background } from 'shared/hocs';
import { colors } from 'shared/variables/colors';
import { SEARCH } from 'shared/constants/search'

const styles = StyleSheet.create({
    info: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    infoHeader: {
        fontSize: 18,
        color: colors.white,
    },
    bold: {
        color: colors.accent,
        fontWeight: 'bold',
    },
    search: {
        marginTop: 10,
        paddingLeft: 40,
        paddingRight: 40,
    },
});

class Search extends PureComponent {
    state = {
        keyboardShow: true,
    };

    componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            this._keyboardDidShow,
        );
        this.keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            this._keyboardDidHide,
        );
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    _keyboardDidShow = () => {
        this.setState({ keyboardShow: false })
    };

    _keyboardDidHide = () => {
        this.setState({ keyboardShow: true })
    };

    render() {
        return (
            <Background source={require('assets/images/search.png')}>
                {this.state.keyboardShow && <Header/>}

                {this.state.keyboardShow
                && (
                    <View style={styles.info}>
                        <Text style={styles.infoHeader}>
                            {SEARCH.SELECT_PRODUCTS}
                            <Text style={styles.bold}>{SEARCH.FROM_FRIDGE}</Text>
                        </Text>
                    </View>
                )
                }
                <View style={styles.search}>
                    <SearchInput/>
                </View>
                {
                    this.state.keyboardShow
                    && <BottomNavigator navigation={this.props.navigation}/>
                }
            </Background>
        );
    }
}

export { Search };
