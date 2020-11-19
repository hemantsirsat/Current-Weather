import React, { useState } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import SearchBar from '../components/SearchBar';

const WeatherHome = ({ navigation })=> {
  const [term, setTerm] = useState('')

  return (
    <View style={styles.container}>
       <Image
        source={require('../../assets/home.png')}
        style={styles.imageStyle}
      />
      <Text style={styles.textStyle}>Enter Name of City/Country.</Text>
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
    marginTop:100,
    borderRadius:10,
    shadowColor:'#DEDEDE',
  },
  textStyle:{
    marginHorizontal:15,
    marginTop:20,
    fontSize:10,
    color:'#6A5ACD',
    textTransform:'uppercase'
  }
});

export default WeatherHome;