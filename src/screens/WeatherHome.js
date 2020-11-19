import React, { useState } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import SearchBar from '../components/SearchBar';


const WeatherHome = ({ navigation })=> {
  const [term, setTerm] = useState('')
  const image = { uri:'https://blush-design.imgix.net/collections/cityscapes/banner-0.png?auto=format' }

  return (
    <View style={styles.container}>
       <Image
        source={require('../../assets/home.png')}
        style={styles.imageStyle}
      />
      <SearchBar
        navigation={navigation}
        term = {term}
        onTermChange={newTerm=>setTerm(newTerm)}
        navigation={navigation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff'
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

export default WeatherHome;