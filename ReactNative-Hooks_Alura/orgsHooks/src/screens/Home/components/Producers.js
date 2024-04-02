import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, FlatList } from 'react-native';

import Producer from './Producer';
import useProducers from '../../../hooks/useProducers';

export default function Producers({ header: Header }) {
    const [title, list] = useProducers();

    const topList = () => {
        return (
            <>
                <Header />
                <Text style={styles.title}>{title}</Text>
            </>
        );
    };

    return (
        <View>
            <FlatList 
                data={list} 
                renderItem={({ item }) => <Producer {...item} />} 
                keyExtractor={({ name }) => name} 
                ListHeaderComponent={topList} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
    },
});
