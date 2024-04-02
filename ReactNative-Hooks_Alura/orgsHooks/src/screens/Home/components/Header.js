import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

import { headerLoad } from '../../../services/dataLoad';

import logo from '../assets/imgs/logo.png';

class Header extends React.Component {
    state = {
        header: {
            textOne: '',
            textTwo: '',
        },
    };

    headerUpdate() {
        const returnData = headerLoad();
        this.setState({ header: returnData });
    }

    componentDidMount() {
        this.headerUpdate();
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={logo} style={styles.img} />
                <Text style={styles.textOne}>{this.state.header.textOne}</Text>
                <Text style={styles.textTwo}>{this.state.header.textTwo}</Text>
            </View>
        );
    }
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
        color: '#a3a3a3',
    },
});

export default Header;
