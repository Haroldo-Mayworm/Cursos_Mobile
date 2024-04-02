import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

export default function Producer({ name, img, distance, stars }) {
    return (
        <View style={styles.card}>
            <Image source={img} style={styles.img} accessibilityLabel={`Logo - {nome}`} />
            <View style={styles.infos}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.distance}>{distance}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f6f6f6',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 5,
        flexDirection: 'row',
        elevation: 5,
    },
    img: {
        width: 48,
        height: 48,
        borderRadius: 5,
        marginVertical: 16,
        marginLeft: 16,
    },
    infos: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginRight: 16,
        marginVertical: 16,
    },
    name: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold',
    },
    distance: {
        fontSize: 12,
        lineHeight: 19,
    },
});
