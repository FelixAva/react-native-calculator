import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import CalculatorScreen from './presentation/screens/CalculatorScreen';

function App() {
  return (
    <View>
      <StatusBar barStyle={'light-content'} backgroundColor="black" />
      <CalculatorScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
