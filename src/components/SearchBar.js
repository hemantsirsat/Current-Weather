import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ term, onTermChange, navigation }) => {
    return(
        <View>
            <TextInput 
                style={styles.searchbarStyle}
                placeholder="Search"
                autoCapitalize='none'
                autoCorrect={false}
                value={term}
                onChangeText={onTermChange}
                onEndEditing={()=>navigation.navigate('Result',{term})}
              
            />
        </View>
    );
};

const styles = StyleSheet.create({
    searchbarStyle:{
        backgroundColor:'#DEDEDE',
        padding:5,
        borderRadius:10,
        paddingLeft:10,
        paddingRight:10,
        marginHorizontal:15,
        justifyContent:'center',
        marginTop:5
    }
});

export default SearchBar;