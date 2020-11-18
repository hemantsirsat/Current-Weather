import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import OpenWeather from '../api/OpenWeather';
import SearchButton from '../components/SearchButton';

const SearchScreen = ({ term, onTermChange }) => {
    return(
        <View>
            <TextInput 
                style={styles.searchscreenStyle}
                placeholder="Search"
                autoCapitalize='none'
                autoCorrect={false}
                value={term}
                onChangeText={onTermChange}
            />
            <SearchButton 
                city = {term}
            />
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
        marginHorizontal:15,
        justifyContent:'center',
        marginTop:30
    },
    textStyle:{
        fontSize:20,
        alignSelf:'center',
        marginTop:50,
        backgroundColor:'#EEE',
        paddingHorizontal:80,
        paddingTop:20,
        width:200,
        height:250,
        borderRadius:25,
    }
});

export default SearchScreen;