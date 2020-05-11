import React, { useState } from 'react';

import { StyleSheet, Text, View, FlatList } from 'react-native';
import Navbar from './src/Navbar'
import AddTodo from './src/AddTodo';
import Todo from './src/Todo';

export default function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (title) => {
    // const newTodo = {
    //   id: Date.now().toString(),
    //   title: title
    // }
    setTodos(prev => [...prev, {
      id: Date.now().toString(),
      title
    }])
  }

  const removeTodo = id => {
    setTodos(prev=>prev.filter((todo)=> todo.id !== id ))
  }

  return (
    <View>
      <Navbar />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <Todo todo={item} onRemove={removeTodo} />
          )}
          keyExtractor={item => item.id}
        />

        {/* <View>
          {todos.map((todo) => {
            return <Todo todo={todo} key={todo.id} />
          })}
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});
