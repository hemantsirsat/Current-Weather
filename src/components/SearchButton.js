import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const SearchButton = ( navigation , { city }) => {
    console.log(navigation)
    return(
        <View>
            <TouchableOpacity 
                style={styles.touchableopacityStyle}
               onPress={()=>navigation.props.navigate('Result')}
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
        borderRadius:10,
    },
    textStyle:{
        fontSize:18,
        color:'#76009f'
    }
});

export default SearchButton;