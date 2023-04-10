import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const ListItem = ({item, deleteItem}) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        <Text style={styles.listItemText} onPress={() => deleteItem(item.id)}>
          &#10006;
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listItemView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 14,
  },
});
export default ListItem;
