import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {THEME} from './../theme'


export default function Navbar() {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>Todo app</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        alignItems: 'center',
        justifyContent:'flex-end',
        backgroundColor: THEME.MAIN_COLOR,
        paddingBottom: 10
    },
    text: {
        color: 'white',
        fontSize: 30
    }
});
