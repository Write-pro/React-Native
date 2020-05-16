import React, { useState } from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';


export default function Todo({todo, onRemove, onOpen}) {


  return (

   <TouchableOpacity
    activeOpacity={0.1}
    onPress={()=>{
      return onOpen(todo.id)
    }}
    onLongPress={()=> onRemove(todo.id)}
   >
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
    </View>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    marginBottom:10
  }
});
