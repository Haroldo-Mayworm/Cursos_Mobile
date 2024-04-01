import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text>First files</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
