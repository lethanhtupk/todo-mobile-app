import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
// import SandBox from './components/sandbox';

const App = () => {
  const [todoItems, setTodoItems] = useState([
    {text: 'Create todo app', key: '1'},
    {text: 'learn react native', key: '2'},
    {text: 'make a real app', key: '3'},
  ]);

  const removeItem = key => [
    setTodoItems(prevTodos => {
      return prevTodos.filter(item => item.key !== key);
    }),
  ];

  const addTodoItem = text => {
    if (text.length > 3) {
      const newTodo = {text: text, key: (todoItems.length + 1).toString()};
      setTodoItems(prevTodos => {
        return [newTodo, ...prevTodos];
      });
    } else {
      Alert.alert('OOPS!', 'Todo must to be over 3 chars long', [
        {text: 'Understood', onPress: () => console.log('alert closed')},
      ]);
    }
  };

  return (
    // <SandBox />
    <TouchableWithoutFeedback
      onPress={() => {
        console.log('dismissed the keyboard');
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo addTodoItem={addTodoItem} />
          <View style={styles.list}>
            <FlatList
              data={todoItems}
              renderItem={({item}) => (
                <TodoItem item={item} pressHandler={removeItem} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});

export default App;
