import React, { useReducer } from 'react';
import { TouchableOpacity, View, StyleSheet, Image, Text } from 'react-native';

import Stars from '../../../components/Stars';

export default function Producer({ name, img, distance, stars }) {
    const [selected, invertSelected] = useReducer((selected) => !selected, false);

    return (
        <TouchableOpacity style={styles.card} onPress={invertSelected}>
            <Image source={img} style={styles.img} accessibilityLabel={`Logo - {nome}`} />
            <View style={styles.infos}>
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Stars 
                        quantity={stars} 
                        editableStar={selected}
                        bigStar={selected}
                    />
                </View>
                <Text style={styles.distance}>{distance}</Text>
            </View>
        </TouchableOpacity>
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
