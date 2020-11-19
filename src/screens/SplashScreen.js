import React from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';

const SplashScreen = ({ navigation })=> {

    setTimeout(()=>{
      navigation.replace('Home');   
    },2000)

    return(
        <View style={styles.viewStyle}>
            <ImageBackground
                style={styles.splashStyle}
                source={require('../../assets/SplashScreen.png')}
            >
            </ImageBackground>
            <Text style={styles.textStyle}>Weather Information At Your Fingertips</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle:{
        alignItems:'center',
        backgroundColor:'#fff',
        flex:1,
        justifyContent:'center',
    },  
    splashStyle:{
        width:300,
        height:200,
    },
    textStyle:{
        fontSize:20,
        paddingTop:20,
        alignSelf:'center',
        color:'#6A5ACD'
    }
});

export default SplashScreen;