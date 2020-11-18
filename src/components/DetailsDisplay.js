import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const DetailsDisplay = ( { temperature, icon, unit, name } ) => {
    return(
        <View style={styles.viewStyle}>
            <Feather name={icon} size={25} color='black'/>
            <Text style={styles.textStyle}>{name}{"\n"}</Text>
            <Text style={styles.textStyle}>{temperature} {unit}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle:{
        padding:5,
        backgroundColor:'#DEDEDE',
        margin:5,
        borderRadius:10,
    },
    textStyle:{
        fontSize:15,
        padding:5
        
    }
});

export default DetailsDisplay;