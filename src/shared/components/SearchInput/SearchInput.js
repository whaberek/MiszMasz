import React from 'react';
import { TextInput, StyleSheet } from 'react-native'

import { colors } from 'shared/variables/colors'
import { SEARCH } from 'shared/constants/search'

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: colors.white,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 30,
    },
});

const SearchInput = ({
    onPress,
    value = null,
    autoFocus = false,
}) => (
    <TextInput
        style={styles.textInput}
        editable={true}
        autoFocus={autoFocus}
        maxLength={20}
        clearTextOnFocus={true}
        placeholder={SEARCH.ENTER_PRODUCT_NAME}
        value={value}
    />
);

export { SearchInput };