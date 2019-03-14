import React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';

import { colors } from 'shared/variables/colors'

const ContentLoading = ({ loading, children }) => (
    loading
        ? <ActivityIndicator
            style={styles.loader}
            color={colors.accent}
            size="large"
        />
        : children
);

const styles = StyleSheet.create({
    loader: { padding: 20 },
});

export { ContentLoading }
