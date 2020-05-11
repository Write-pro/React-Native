import React, { useState } from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';


export default function Todo({todo, onRemove}) {


  return (

   <TouchableOpacity
    activeOpacity={0.1}
    onPress={()=>{
      console.log('hello)))');
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
