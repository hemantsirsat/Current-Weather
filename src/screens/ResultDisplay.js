import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ResultDisplay = ( {city} ) => {
    const image = { uri:'https://image.freepik.com/free-vector/egypt-desert-with-hatshepsut-temple-camel_107791-1933.jpg' }
    return(
        <View>
            <Image
                style={styles.imageStyle}
                source={image} 
            />
            <Text>{city}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle:{
        width:400,
        height:250,
        alignSelf:'center'
    }
});

export default ResultDisplay;