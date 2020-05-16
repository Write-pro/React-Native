import React, { useState } from 'react';

import { StyleSheet, Image, Text, View, FlatList } from 'react-native';
import AddTodo from '../components/AddTodo';
import Todo from '../components/Todo'

export default function MainScreen({ addTodo, todos, removeTodo, openTodo }) {
  let content = (
    <FlatList
      data={todos}
      renderItem={({ item }) => (
        <Todo todo={item}
          onRemove={removeTodo}
          onOpen={openTodo} />
      )}
      keyExtractor={item => item.id.toString()} />
  )

  if (todos.length === 0) {
    content = (
      <View style={styles.imgWrap}>
        <Image
          source={require('../../assets/no-items.png')}
          style={styles.image}
        />
      </View>
    )
  }

  return (
    <View>
      <AddTodo onSubmit={addTodo} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  imgWrap: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    height: 300
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  }
});
