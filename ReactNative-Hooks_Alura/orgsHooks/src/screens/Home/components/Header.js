import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

import logo from '../assets/imgs/logo.png';

export default function Header() {
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.img} />
            <Text style={styles.textOne}>Hello, Haroldo</Text>
            <Text style={styles.textTwo}>Find the best producers</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f6f6f6',
        padding: 15,
    },
    img: {
        width: 130,
        height: 50,
    },
    textOne: {
        marginTop: 24,
        fontSize: 32,
        lineHeight: 42,
        fontWeight: 'bold',
    },
    textTwo: {
        marginTop: 8,
        fontSize: 18,
        lineHeight: 26,
    },
});
