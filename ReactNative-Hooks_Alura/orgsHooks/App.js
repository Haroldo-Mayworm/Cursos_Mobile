import React from 'react';
import { SafeAreaView, View, StyleSheet, Text } from 'react-native';

import Home from './src/screens/Home';

export default function App() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View>
                <Home />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingTop: 30,
        marginTop: 10,
        paddingHorizontal: 5,
    },
});
