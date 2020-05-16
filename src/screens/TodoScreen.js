import React, { useState } from 'react';

import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { THEME } from './../theme'
import AppCard from '../components/ui/AppCard';
import EditModal from '../components/EditModal';


export default function TodoScreen({ goBack, todo, onRemove, onSave }) {

  const [modal, setModal] = useState(false)

  const saveHandler = (title)=>{
    onSave(todo.id, title)
    setModal(false)
  }
  return (
    <View>
      <EditModal
        visible={modal}
        onCancel={() => setModal(false)}
        value={todo.title}
        onSave={saveHandler}
      />

      <AppCard style={styles.card}>
        <Text style={styles.title}>{todo.title}</Text>
        <Button title='редактировать'
          onPress={() => setModal(true)} />
      </AppCard>

      <View style={styles.buttons} >
        <View style={styles.button}>
          <Button title='назад'
            onPress={goBack}
            color={THEME.GREY_COLOR}
          />
        </View>
        <View style={styles.button}>
          <Button title='удалить'
            color={THEME.DANGER_COLOR}
            onPress={() => onRemove(todo.id)}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  button: {
    width: '45%'
  },
  title: {
    fontSize: 20
  },
  card: {
    marginBottom: 20,
    padding: 15
  }
});
