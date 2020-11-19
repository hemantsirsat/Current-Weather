import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Image , ScrollView} from 'react-native';
import OpenWeather from '../api/OpenWeather';
import DetailsDisplay from '../components/DetailsDisplay';
import { useFonts, ArchitectsDaughter_400Regular } from '@expo-google-fonts/architects-daughter';

const ResultDisplay = ( {route} ) => {
    const city = route.params.term
    const [FetchWeather, result, errorMessage] = OpenWeather();

    let [fontLoaded, error] = useFonts({
        ArchitectsDaughter_400Regular
    });

    useEffect(()=>{
        FetchWeather(city)
    },[]);

    return(
        <View style={styles.viewStyle}>
            <Image
                style={styles.imageStyle}
                source={require('../../assets/result.png')} 
            />
            {errorMessage ? <Text style={styles.errormessageStyle}>{errorMessage}</Text> : null}
            {result ?
                <View>
                    <Text style={styles.cityStyle}>{city}</Text>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <DetailsDisplay 
                            temperature={result.feels_like}
                            icon='thermometer'
                            unit= '&deg;C'
                            name='Feels Like'
                        />
                        <DetailsDisplay 
                            temperature={result.temp}
                            icon='thermometer'
                            unit= '&deg;C'
                            name='Temperature'
                        />
                        <DetailsDisplay 
                            temperature={result.temp_max}
                            icon='thermometer'
                            unit= '&deg;C'
                            name= 'Temperature Max'
                        />
                        <DetailsDisplay 
                            temperature={result.temp_min}
                            icon='thermometer'
                            unit= '&deg;C'
                            name= 'Temperature Min'
                        />
                        <DetailsDisplay 
                            temperature={result.humidity}
                            icon='droplet'
                            unit= '%'
                            name= 'Humidity'
                        />
                        <DetailsDisplay 
                            temperature={result.pressure}
                            icon='wind'
                            unit= 'hPa'
                            name='Pressure'
                        />
                    </ScrollView>
                </View>
            : null }
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
        flex:1,
        paddingHorizontal:20,
        paddingBottom:10,
        backgroundColor:'#fff'
    },
    cityStyle:{
        alignSelf:'center',
        fontSize:24,
        fontFamily:'ArchitectsDaughter_400Regular',
        padding:20,
        textTransform:'uppercase'

    },
    scrollviewStyle:{
        alignSelf:'center',
        width:150,
        marginVertical:20,
    },
    errormessageStyle:{
        textTransform:'uppercase',
        alignSelf:'center',
        paddingTop:30,
        fontSize:30,
        fontFamily:'ArchitectsDaughter_400Regular',
    }

});

export default ResultDisplay;