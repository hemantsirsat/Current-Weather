import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const SearchScreen = () => {
    return(
        <TextInput 
            style={styles.searchscreenStyle}
            placeholder="Search"
        />
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