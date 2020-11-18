import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import SearchButton from '../components/SearchButton';

const SearchBar = ({ term, onTermChange, navigation }) => {
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
                props = { navigation }
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
    }
});

export default SearchBar;