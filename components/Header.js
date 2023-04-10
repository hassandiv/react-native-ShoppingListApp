import * as React from 'react';

import {Text, View, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.paragraph}>Hello world!</Text>
    </View>
  );
};

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
