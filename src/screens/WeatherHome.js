import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import SearchBar from '../components/SearchBar';


const WeatherHome = ({ navigation })=> {
  const [term, setTerm] = useState('')
  const image = { uri:'https://blush-design.imgix.net/collections/cityscapes/banner-0.png?auto=format' }
  console.log(term);
  return (
    <View style={styles.container}>

       <Image
        source={image}
        style={styles.imageStyle}
      />

      <SearchBar
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