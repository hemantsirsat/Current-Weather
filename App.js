import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import SearchScreen from './src/screens/SearchScreen';

export default function App() {
  const [term, setTerm] = useState('')
  const image = { uri:'https://blush-design.imgix.net/collections/cityscapes/banner-0.png?auto=format' }
  return (
    <View style={styles.container}>
       <Image
        source={image}
        style={styles.imageStyle}
      />
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
    flex:1
  },
  imageStyle:{
    width:300,
    height:150,
    padding:50,
    alignSelf:'center',
    marginTop:50,
    borderRadius:10,
    shadowColor:'#DEDEDE',
  }
});
