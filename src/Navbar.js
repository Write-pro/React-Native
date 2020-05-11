import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
        backgroundColor: '#3949ab',
        paddingBottom: 10
    },
    text: {
        color: 'white',
        fontSize: 30
    }
});
