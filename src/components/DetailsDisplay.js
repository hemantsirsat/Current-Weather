import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const DetailsDisplay = ( { temperature, icon, unit, name } ) => {
    return(
        <View style={styles.viewStyle}>
            <Feather name={icon} size={25} color='black' style={{top:0}}/>
            <Text style={styles.textheaderStyle}>{name}</Text>
            <View style={styles.viewvalueStyle}>
                <Text style={styles.textvalueStyle}>{temperature} {unit}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle:{
        padding:5,
        backgroundColor:'#DEDEDE',
        margin:5,
        borderRadius:10,
        marginHorizontal:10,
        flexDirection:'row'
    },
    viewvalueStyle:{
        position:'absolute',
        right:50,
    },  
    textheaderStyle:{
        fontSize:15,
        padding:5,
        fontWeight:'bold'
        
    },
    textvalueStyle:{
        fontSize:15,
        padding:5,
        fontWeight:'bold',
        left:25
        
    }
});

export default DetailsDisplay;