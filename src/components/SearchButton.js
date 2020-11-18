import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import OpenWeather from '../api/OpenWeather';

const SearchButton = ({ city }) => {
    const [FetchWeather, result, errorMessage] = OpenWeather();
    return(
        <View>
            <TouchableOpacity 
                style={styles.touchableopacityStyle}
                onPress={()=>FetchWeather(city)}
            >
                <Text style={styles.textStyle}>Search</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    touchableopacityStyle:{
        alignSelf:'center',
        margin:20,
        borderWidth:2,
        borderColor:'#76009f',
        paddingHorizontal:30,
        paddingVertical:10,
        borderRadius:20,
    },
    textStyle:{
        fontSize:18,
        color:'#76009f'
    }
});

export default SearchButton;