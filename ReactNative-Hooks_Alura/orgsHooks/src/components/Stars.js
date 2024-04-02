import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import StarFill from '../screens/Home/assets/imgs/estrela.png';
import StarNotFill from '../screens/Home/assets/imgs/estrelaCinza.png';

export default function Stars({ quantity: oldQuantity, editableStar = false, bigStar = false }) {
    const [quantity, setQuantity] = useState(oldQuantity);

    const styles = stylesFunction(bigStar);

    const getImage = (i) => {
        if (i < quantity) {
            return StarFill;
        }
        return StarNotFill;
    };

    const RenderStars = () => {
        const listStars = [];
        for (let i = 0; i < 5; i++) {
            listStars.push(
                <TouchableOpacity key={i} onPress={() => setQuantity(i + 1)} disabled={!editableStar}>
                    <Image source={getImage(i)} style={styles.star} />
                </TouchableOpacity>
            );
        }
        return listStars;
    };

    return (
        <View style={styles.stars}>
            <RenderStars />
        </View>
    );
}

const stylesFunction = (bigStar) =>
    StyleSheet.create({
        stars: {
            flexDirection: 'row',
        },
        star: {
            width: bigStar ? 36 : 12,
            height: bigStar ? 36 : 12,
            marginRight: 2,
        },
    });
