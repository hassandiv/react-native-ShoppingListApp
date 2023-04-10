import * as React from 'react';
import {View, StyleSheet} from 'react-native';

// You can import from local files
import Header from './components/Header';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },
  paragraph: {
    margin: 24,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
  },
});

export default App;
