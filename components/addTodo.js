import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

const AddTodo = ({addTodoItem}) => {
  const [text, setText] = useState('');

  const changeHandler = val => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        placeholder="Add New Todo"
        onChangeText={changeHandler}
        style={styles.input}
      />
      <Button
        onPress={() => {
          addTodoItem(text);
        }}
        title="Add Todo"
        color="coral"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default AddTodo;
