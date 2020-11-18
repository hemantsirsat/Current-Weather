import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import OpenWeather from '../api/OpenWeather';

const ResultDisplay = ( {route} ) => {
    const city = route.params.term
    const [FetchWeather, result, errorMessage] = OpenWeather();
    
    const image = { uri:'https://image.freepik.com/free-vector/egypt-desert-with-hatshepsut-temple-camel_107791-1933.jpg' }

    useEffect(()=>{
        FetchWeather(city)
    },[]);

    console.log(result)
    if(!result){
        return null
    }
    return(
        <View style={{flex:1}}>
            <Image
                style={styles.imageStyle}
                source={image} 
            />
            <View style={styles.viewStyle}>
                {errorMessage ? <Text>{errorMessage}</Text> : null}
                {result ? <Text>{result.temp}</Text> : null}
            </View>          
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle:{
        width:400,
        height:250,
        alignSelf:'center',
    },
    viewStyle:{

    }
    
});

export default ResultDisplay;