import React, {useState} from 'react';
import {View, FlatList, Alert, StyleSheet} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: 1, text: 'Milk'},
    {id: 2, text: 'Eggs'},
    {id: 3, text: 'Bread'},
    {id: 4, text: 'Juice'},
  ]);

  //we can remove item by index like below
  // const itemsCopy = [...items]
  // const deleteItem = (item) => {
  //   setItems(itemsCopy.splice(1)]);
  // };

  //remove item by id - prevItems creates a copy of the original array items
  const deleteItem = (id: number) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  const addItem = (text: string) => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item');
    } else {
      setItems(prevItems => {
        return [{id: items.length + 1, text}, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },
});

export default App;
