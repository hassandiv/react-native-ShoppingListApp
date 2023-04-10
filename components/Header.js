import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.paragraph}>{title}</Text>
    </View>
  );
};

//or below as default props for the title
// Header.defaultProps = {
//   title: "Shopping List ..."
// }

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'navy',
  },
  paragraph: {
    fontSize: 23,
    textAlign: 'center',
    color: '#fff',
  },
});

export default Header;
