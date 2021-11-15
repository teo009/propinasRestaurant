import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Body from './src/components/Body';

export default function App() {
  return (
    <View style={styles.fondoApp}>
      <View style={styles.container}>
        <Text style={styles.text}>CUENTA PROPINAS</Text>
      </View>
      <Body />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 27,
    paddingVertical: 40,
  },
  fondoApp: {
    backgroundColor: '#C0E3E6',
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'hsl(183, 100%, 25%)'
  },
});
