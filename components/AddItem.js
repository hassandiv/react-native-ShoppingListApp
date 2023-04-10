import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const AddItem = ({addItem}) => {
  const [text, setText] = useState('');

  const onChange = textValue => setText(textValue);

  return (
    <View>
      <TextInput
        placeholder="Add Item ..."
        style={styles.input}
        onChangeText={onChange}
      />
      <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
        <Text style={styles.addItem}>+ Add Item</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#ededed',
    padding: 9,
    margin: 5,
  },
  addItem: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
