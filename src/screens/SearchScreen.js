import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import OpenWeather from '../api/OpenWeather';

const SearchScreen = ({ term, onTermChange }) => {
    const [FetchWeather, result, errorMessage] = OpenWeather();

    return(
        <View>
        <TextInput 
            style={styles.searchscreenStyle}
            placeholder="Search"
            autoCapitalize='none'
            autoCorrect={false}
            value={term}
            onChangeText={onTermChange}
            onEndEditing={()=>FetchWeather(term)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    searchscreenStyle:{
        backgroundColor:'#DEDEDE',
        padding:5,
        borderRadius:10,
        paddingLeft:10,
        paddingRight:10,
        marginHorizontal:15
    }
});

export default SearchScreen;