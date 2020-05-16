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
      <View>
        <Image  source={require('../../assetss/no-items.png')}/>
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
  imgWrap:{

  }
});
