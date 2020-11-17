import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchScreen from './src/screens/SearchScreen';

export default function App() {
  const [term, setTerm] = useState('')
  return (
    <View style={styles.container}>
      <SearchScreen 
        term = {term}
        onTermChange={newTerm=>setTerm(newTerm)}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:30
  },
});
