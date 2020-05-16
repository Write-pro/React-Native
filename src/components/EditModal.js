import React, { useState } from 'react';

import { StyleSheet, TextInput, View, FlatList, Button, Modal, Alert } from 'react-native';
import { THEME } from './../theme'


export default function EditModal({ visible, onCancel, value, onSave }) {

    const [title, setTitle] = useState(value)
    const saveHandler = () => {
        if (title.trim().length < 3) {
            Alert.alert('Error', `Минимальная длинна 3 символа. Сейчас ${title.trim().length}`)
        } else {
            onSave(title)
        }
    }

    return (
        <Modal visible={visible}
            animationType="slide"
        //fade
        >
            <View style={styles.wrap}>
                <TextInput style={styles.input}
                    value={title}
                    onChangeText={setTitle}
                    placeholder='Введите название'
                    autoCapitalize='none'
                    autoCorrect={false}
                    maxLength={64}
                />
                <View style={styles.buttons}>
                    <Button title='Отменить'
                        color={THEME.DANGER_COLOR}
                        onPress={() => onCancel()}
                    />
                    <Button title='Сохранить'
                        onPress={() => saveHandler()}
                    />
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR,
        width: '80%'
    },
    buttons: {
        width: '100%',
        marginTop: 10,
        flexDirection: "row",
        justifyContent: 'space-around'
    }
});
