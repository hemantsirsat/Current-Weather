import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Image , ScrollView} from 'react-native';
import OpenWeather from '../api/OpenWeather';
import DetailsDisplay from '../components/DetailsDisplay';

const ResultDisplay = ( {route} ) => {
    const city = route.params.term
    const [FetchWeather, result, errorMessage] = OpenWeather();
    
    const image = { uri:'https://image.freepik.com/free-vector/countryside-landscape-concept_52683-46393.jpg' }

    useEffect(()=>{
        FetchWeather(city)
    },[]);

    console.log(result)
    if(!result){
        return null
    }
    return(
        <View style={styles.viewStyle}>
            <Image
                style={styles.imageStyle}
                source={image} 
            />
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
        marginHorizontal:10,
        paddingBottom:10
    },
    cityStyle:{
        alignSelf:'center',
        fontSize:24,
        padding:20,
        fontWeight:'bold',
        textTransform:'uppercase'

    },
    scrollviewStyle:{
        alignSelf:'center',
        width:150,
        marginVertical:20,
    }

});

export default ResultDisplay;